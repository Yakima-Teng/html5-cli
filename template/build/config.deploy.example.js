module.exports = {
    type: 'sftp', // 填ftp或者sftp，根据实际情况选择
    username: 'username', // 账号用户名
    password: 'password', // 账号密码
    host: '123.45.67.89', // 目标服务器的ip或域名
    port: 0, // 传0会使用默认端口号（ftp协议用21端口，sftp协议用22端口）
    dest: `/var/www/parentFolder/`, // 填写到待部署目录的父目录即可
}
