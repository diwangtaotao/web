const AliyunossWebpackPlugin = require('aliyunoss-webpack-plugin'); // 阿里云
const oss=require("./oss")
const isCDN = process.env.CDN === "true"; // 是否上传到cdn

module.exports = {
  publicPath: isCDN ?
    'http://web.familytour.cn/' : './',
  productionSourceMap: false,
  configureWebpack: config => {
    if (isCDN && oss.accessKeySecret) {
      // 阿里云oss
      config.plugins.push(new AliyunossWebpackPlugin({
        buildPath: 'dist/**',
        region: oss.region,
        accessKeyId: oss.accessKeyId,
        accessKeySecret: oss.accessKeySecret,
        bucket: oss.bucket,
        deleteAll: true,
        generateObjectPath: function (filename, file) {
          return file.replace(/dist\//, '')
        },
      }))
    }
  }
}