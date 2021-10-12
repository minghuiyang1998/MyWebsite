// 没有babel只兼容ES5的写法
var inquirer = require('inquirer')
const fs = require('fs');
var path = require('path');
var vibrant = require('node-vibrant')

var url = require('url');
var http = require('http');
var sizeOf = require('image-size');

// 读取所有可添加的分类
var catalog = []
var contentPath = path.resolve(__dirname, '../content')
fs.readdirSync(contentPath).forEach(file => {
    if (fs.statSync(contentPath + '/' + file).isDirectory()) {
        catalog.push(file)
    }
});

// 用户提示
inquirer
    .prompt([
        { type: 'list', name: 'type', message: '添加目录', default: 0, choices: catalog },
        { type: 'input', name: 'title', message: '文章标题(不能含有特殊符号/)' },
        { type: 'input', name: 'path', message: '路径名（开头不用带有/，请用短横分隔英文填写）' },
        { type: 'input', name: 'author', message: '文章作者' },
        { type: 'input', name: 'readingTime', message: '估计阅读时长（以分钟为单位，只需要填入数字）' },
        { type: 'input', name: 'img', message: '文章图片(放入一个线上地址用于展示brief的时候使用' },
        { type: 'editor', name: 'digest', message: '摘要' },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!

        var id, idFilePath = path.resolve(__dirname, "./id")
        try {
            id = parseInt(fs.readFileSync(idFilePath)) + 1;
        } catch (e) {
            throw e
        }


        var defaultInfo = {
            type: 'frontend',
            title: 'default',
            author: 'jasmine',
            digest: '',
            img: '',
            readingTime: '3 MIN READ'
        }


        var options = url.parse(answers.img);
        http.get(options, function (response) {
            var chunks = [];
            response.on('data', function (chunk) {
                chunks.push(chunk);
            }).on('end', function () {
                var buffer = Buffer.concat(chunks);
                vibrant.from(answers.img).getPalette().then((palette) => {
                    var config = {
                        id: id,
                        type: answers.type || defaultInfo.type,
                        path: '/' + answers.type + '/' + answers.path || '/' + answers.type + '/' + id,
                        title: answers.title || defaultInfo.title,
                        author: answers.author || defaultInfo.author,
                        digest: answers.digest || defaultInfo.digest,
                        image: answers.img || defaultInfo.img,
                        create_date: new Date(),
                        update_date: new Date(),
                        timestamp: Date.now(),
                        reading_time: answers.readingTime + ' MIN READ' || defaultInfo.readingTime,
                        tags: "[]",
                        image_height: sizeOf(buffer).height,
                        image_width: sizeOf(buffer).width
                    }

                    var p = {}
                    Object.keys(palette).map(key => {
                        p[key] = palette[key]._rgb
                    })
                    // console.log(p)
                    config.palette = JSON.stringify(p)

                    // format prefix
                    var prefix = `---\n`
                    Object.keys(config).forEach(key => prefix += key + ': ' + config[key].toString() + '\n')
                    prefix += '---'
                    prefix = prefix.replace(/\n{2,}/, '\n')

                    // new file
                    var addPath = path.resolve(contentPath, answers.type)

                    try {
                        fs.writeFileSync(path.resolve(addPath, `${config.title}.md`), prefix)

                        try {
                            fs.writeFileSync(idFilePath, id);
                        } catch (e) {
                            console.log('write id error!', e)
                        }
                    } catch (e) {
                        throw e
                    }

                })
            });
        });


    })
    .catch(e => {
        throw e
    });