// 给全部文章添加某一个头部，这个头部比如颜色，利用原有的某一个字段，或几个字断得到的数据，不来自于用户输入】
// 修改某一个部分的文章

// 1. 提取公共操作
// 2. 只有数据来源不一样

// 输入旧的数据，得到新的数据
const fs = require('fs');
var path = require('path');
var recursive = require("recursive-readdir");
var vibrant = require('node-vibrant')

var url = require('url');
var http = require('http');
var sizeOf = require('image-size');

let funcENUM = {
    'type': function (info) {

    },
    'title': function (info) {

    },
    'author': function (info) {

    },
    'readingTime': function (info) {

    },
    'img': function (info) {

    },
    'digest': function (info) {

    },
    'imageSize': function(info) {
        return new Promise((resolve, reject) => {
            let tempInfo = JSON.parse(JSON.stringify(info))
            if (info.image.length) {
                http.get(url.parse(info.image), function (response) {
                    var chunks = [];
                    response.on('data', function (chunk) {
                        chunks.push(chunk);
                    }).on('end', function () {
                        var buffer = Buffer.concat(chunks);
                        // console.log(sizeOf(buffer));
                        var image = sizeOf(buffer);
                        resolve(Object.assign({}, tempInfo, {image_height: image.height, image_width: image.width}))
                    });
                });
            }
        })
    },
    'palette': function (info) {
        return new Promise((resolve, reject) => {
            let tempInfo = JSON.parse(JSON.stringify(info))
            // console.log("TCL: tempInfo", tempInfo)
            if (info.image.length) {
                vibrant.from(info.image).getPalette().then((palette) => {
                    var p = {}
                    Object.keys(palette).map(key => {
                        p[key] = palette[key]._rgb
                    })
                    tempInfo.palette = JSON.stringify(p)
                    resolve(tempInfo)
                }).catch(e => reject(e))
            }
        })
    },
    'timestamp': function (info) {
        return new Promise((resolve, reject) => {
            let tempInfo = JSON.parse(JSON.stringify(info))
            if (info.create_date.length) {
                let createTime = new Date(info.create_date.toString())
                tempInfo.timestamp = createTime.getTime()
                resolve(tempInfo)
            }
        })
    },
    'id': function (info) {
        return newValue
    },
    'path': function (info) {
        return newValue
    }
}

function updateAll(key) {
    // 在这里递归读入每一篇文章,根据输入的key值，调用对应的方法完成修改写回
    recursive("content", [function (file, state) {
        return !state.isDirectory() && path.extname(file) !== '.md'
    }], function (err, filesPath) {
        if (err) {
            throw err
        }

        let handleFunc = funcENUM[key]

        filesPath.forEach((path) => {
            let fileContent = fs.readFileSync(path, { encoding: 'utf-8' })
            let oldInfo = _string2object(fileContent)

            handleFunc(oldInfo).then((newInfo) => {
                let prefix = _object2string(newInfo)
                // console.log("TCL: updateAll -> prefix", prefix)
                let newContent = fileContent.replace(/---\n(.*)\n---/s, prefix)
                // console.log("TCL: updateAll -> newContent", newContent)
                try {
                    fs.writeFileSync(path, newContent)
                } catch (e) {
                    throw e
                }
            })
        })
    });
}

function addTimeStamp() {
    recursive("content", [function (file, state) {
        return !state.isDirectory() && path.extname(file) !== '.md'
    }], function (err, filesPath) {
        if (err) {
            throw err
        }

        let handleFunc = funcENUM['timestamp']

        filesPath.forEach((path) => {
            let fileContent = fs.readFileSync(path, { encoding: 'utf-8' })
            let oldInfo = _string2object(fileContent)

            handleFunc(oldInfo).then((newInfo) => {
                let prefix = _object2string(newInfo)
                // console.log("TCL: updateAll -> prefix", prefix)
                let newContent = fileContent.replace(/---\n(.*)\n---/s, prefix)
                // console.log("TCL: updateAll -> newContent", newContent)
                try {
                    fs.writeFileSync(path, newContent)
                } catch (e) {
                    throw e
                }
            })
        })
    });

}

function addImageSize() {
    recursive("content", [function (file, state) {
        return !state.isDirectory() && path.extname(file) !== '.md'
    }], function (err, filesPath) {
        if (err) {
            throw err
        }

        let handleFunc = funcENUM['imageSize']

        filesPath.forEach((path) => {
            let fileContent = fs.readFileSync(path, { encoding: 'utf-8' })
            let oldInfo = _string2object(fileContent)

            handleFunc(oldInfo).then((newInfo) => {
                let prefix = _object2string(newInfo)
                // console.log("TCL: updateAll -> prefix", prefix)
                let newContent = fileContent.replace(/---\n(.*)\n---/s, prefix)
                // console.log("TCL: updateAll -> newContent", newContent)
                try {
                    fs.writeFileSync(path, newContent)
                } catch (e) {
                    throw e
                }
            })
        })
    });

}

function _object2string(obj) {
    let prefix = `---\n`
    Object.keys(obj).forEach(key => prefix += key + ': ' + obj[key].toString() + '\n')
    prefix += '---'
    return prefix
}

function _string2object(fileContent) {
    let infoStr = /---\n(.*)\n---/s.exec(fileContent)[1]
    let info = {}
    infoStr.split('\n').forEach((i) => {
        let temp = /^(\w*?):\s*(.*?)$/.exec(i)
		console.log("TCL: function_string2object -> temp", temp)
        info[temp[1]] = temp[2]
    })
    console.log("TCL: updateAll -> formatInfo", info)
    return info
}

// updateAll('palette')
// addTimeStamp('timestamp')
addImageSize()