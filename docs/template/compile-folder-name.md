# 为何不固定编译产出物所在的目录名，如固定为“dist”目录？

本程序会根据实际项目名自动取前面英文、数字部分（到非英文非数字部分即中断）作为编译产出物文件夹名称。

这样代码仓库中就可以使用类似“cjhd1902春节活动2019年2月”这样的项目名，然后发布时发布的编译产物的文件夹名称为“cjhd1902”，这样有两个好处：

* 看项目名容易回忆起这个项目是干嘛的；
* 发布到线上可以直接将产物文件夹进行发布，访问时url中不需要带入中文等特殊字符；

如果你喜欢使用固定的产出物目录名怎么办？简单啊，你就当它是固定产出物目录名就行了，难道你的项目名需要天天变？

## 注意事项

这里需要注意，应当避免出现多个编译产出物文件夹名称相同的情况，否则通过`yarn deploy`命令部署到同一个目录下时会出现文件覆盖的文件。

举个例子。假如现在有两个源码目录，目录名分别如下：

- cjhd1902春节活动2019年2月
- cjhd1902春节活动2月

由于这两个目录名按规则截取出的编译产物文件夹名称均为`cjhd1902`，理论上如果发布到产线服务器的同一个目录下，会出现文件覆盖问题。

要避免这个问题，建议源码目录的命名可以参考下面的规则：

项目名 = [项目描述的拼音首字母] + [项目创建时的日期] + [项目描述中文文本] + [可选的其他提示性文本]

分别解释如下：

- [项目描述的拼音首字母]：如上面的`cjhd`（`春节活动`的拼音首字母）；
- [项目创建时的日期]：如上面的`1902`，一般的公司，日期精确到月即可，天天一大堆专题/活动的公司，可以考虑精确到具体的某一天/某半天/某个时辰，如`190213`；
- [项目描述中文文本]：如上面的`春节活动`；
- [可选的其他提示性文本]：如上面的`2019年2月`、`2月`。

按这个规则可以避免大多数的同名情况了。极少数情况下发现还有同名的情况，修改下***[项目描述的拼音首字母]***吧，或者写一个目录名检测的脚本（但是不建议写脚本，因为同名的概率本身不高，写了脚本每个专题活动创建时都要检测，项目多了增加的时间成本不合算的）。
