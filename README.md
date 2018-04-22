# Yvonnefanf 的毕业设计

## 准备

先将用于人脸识别，人脸追踪，追踪可视化的[这个仓库](https://github.com/Yvonnefanf/Yvonne_second) 克隆到本地（注意要和本仓库在同一目录下），然后按照其说明运行后，即可在本项目根目录生成 `traceData.json`。

## 如何运行

1. 确保你已经安装好了 Python 3.5+，请在终端中使用 `python3 --version` 检查是否安装。

2. 为本项目配置虚拟环境并激活：

```
$ python3 -m venv venv
$ source venv/bin/activate
```

3. 安装项目所需依赖：

```
(venv)$ pip install -r requirements.txt
```

4. 启动项目：

```
(venv)$ export FLASK_APP=index.py; flask run
```

5. 打开浏览器，进入 [localhost:5000](localhost:5000)，即可进入本系统。

## Clone 此仓库时的注意事项

在 clone 仓库时一般是 clone 所有的提交历史，所以会非常大，这无疑对国内的小伙伴们不是很友好。

所以建议只 clone 最近一次版本提交：

```git
  git clone --depth=1 https://github.com/Yvonnefanf/Yvonne_second
```
