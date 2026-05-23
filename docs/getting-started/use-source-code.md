# 使用源码安装

## 安装 {#installation}

<script setup>
import Silian_AsciinemaPlayer from '/components/AsciinemaPlayer.vue'
</script>

如果你想使用 Docker，请转到[使用 Docker](/docs/getting-started/use-docker)。

1. 在你的机器上安装好 [Python](https://www.python.org/)。

    :::info

    Python 版本：3.12+。

    :::

2. 下载源码：

    1. 克隆仓库：

        ```sh
        git clone https://github.com/TTB-Network/python-openbmclapi-v2.git
        ```

        :::tip

        你亦可以使用镜像源加速：

        ```sh
        git clone https://ghproxy.bugungu.top/https://github.com/TTB-Network/python-openbmclapi-v2.git
        ```

        :::

    2. 打开仓库所在文件夹：

        ```sh
        cd python-openbmclapi
        ```

    <Silian_AsciinemaPlayer
        url="https://asciinema.org/a/655199.cast"
        :options="{
            theme: 'monokai',
            poster: 'npt:21.5',
            cols: 100,
            rows: 30,
            idleTimeLimit: 0.2,
        }"
    />


3. 安装依赖：

    :::tip

    你亦可设置 pip 镜像源来加快你在中国大陆地区的下载速度：

    ```sh
    pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
    ```

    :::


    1. 安装 [pipx](https://pipx.pypa.io/latest/):

        ```sh
        pip install --user pipx
        ```
    
    2. 重新启动终端。

    3. 安装 [Poetry](https://python-poetry.org/):

        ```sh
        pipx install poetry
        pipx ensurepath
        ```

        :::info

        在 Linux 系统下，pipx 需要安装 `python3.10-venv` 包来进行依赖的安装：

        ```sh
        apt-get install python3.10-venv
        ```

        :::
    
    4. 重新启动终端。

    5. 安装依赖：

        ```sh
        poetry install
        ```

    <Silian_AsciinemaPlayer
        url="https://asciinema.org/a/674709.cast"
        :options="{
            theme: 'monokai',
            poster: 'npt:21.5',
            cols: 100,
            rows: 30,
            idleTimeLimit: 0.2,
        }"
    />

    :::tip

    你可能需要先安装 [Microsoft C++ 生成工具](https://visualstudio.microsoft.com/visual-cpp-build-tools/)。

    :::


# 配置 #{configuration}

1. 运行一次主程序生成配置文件：

    :::info

    如果你使用 Poetry 安装依赖，你需要先激活虚拟环境。

    ```sh
    poetry shell
    ```

    <Silian_AsciinemaPlayer
        url="https://asciinema.org/a/674764.cast"
        :options="{
            theme: 'monokai',
            poster: 'npt:21.5',
            cols: 100,
            rows: 30,
            idleTimeLimit: 0.2,
        }"
    />

    :::


    ```sh
    python main.py
    ```

    <Silian_AsciinemaPlayer
    url="https://asciinema.org/a/655202.cast"
        :options="{
            theme: 'monokai',
            poster: 'npt:21.5',
            cols: 100,
            rows: 30,
            idleTimeLimit: 0.2,
        }"
    />

    如果你看到以下报错信息：`core.exceptions.ClusterIdNotSetError`，恭喜你！你可以进行下一步的配置了。

2. 在 `config/config.yml` 中，填写你的 `id`（即 `CLUSTER_ID`）和 `secret`（即 `CLUSTER_SECRET`）。

    ```yml
    cluster:
      byoc: false
      id: '' # OpenBMCLAPI 的 CLUSTER_ID // [!code focus]
      public_host: ''
      ...
      secret: '' # OpenBMCLAPI 的 CLUSTER_SECRET // [!code focus]
    ```

3. 重新启动程序以应用最新配置。
