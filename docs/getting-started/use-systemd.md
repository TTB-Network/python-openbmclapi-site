# 使用一键脚本（推荐） {#use-systemd}

<script setup>
import Silian_AsciinemaPlayer from '/components/AsciinemaPlayer.vue'
</script>

仅适用于 Linux amd64 / arm64 平台。

如果你想使用 Docker，请转到[使用 Docker](/docs/getting-started/use-docker)。

## 准备 {#prepare}

在使用一键脚本前，请确保你已做好以下准备：

- 确保 systemd 是您的启动进程
- [Python](https://www.python.org/) 环境（版本：3.12+）

## 安装 {#installation}

1. 进入系统的 root 用户。

2. 运行安装脚本：

    ```sh
    curl -fsSL https://raw.githubusercontent.com/TTB-Network/python-openbmclapi-v2/main/installer/installer.sh | sudo bash -s
    ```

    :::tip

    你亦可以使用镜像源加速：

    ```sh
    curl -fsSL https://ghproxy.bugungu.top/https://raw.githubusercontent.com/TTB-Network/python-openbmclapi-v2/main/installer/installer.sh | sudo bash -s
    ```

    :::
    
    <Silian_AsciinemaPlayer
    url="https://asciinema.org/a/698358.cast"
    :options="{
        theme: 'monokai',
        poster: 'npt:21.5',
        cols: 100,
        rows: 30,
        idleTimeLimit: 1,
    }"
    />


## 配置 {#configuration}

1. 在 `/opt/python-openbmclapi/config/config.yml` 中，填写你的 `id`（即 `CLUSTER_ID`）和 `secret`（即 `CLUSTER_SECRET`）。

    ```yml
    cluster:
      byoc: false
      id: '' # OpenBMCLAPI 的 CLUSTER_ID // [!code focus]
      public_host: ''
      ...
      secret: '' # OpenBMCLAPI 的 CLUSTER_SECRET // [!code focus]
    ```

2. 重新启动程序：

    ```sh
    systemctl reload python-openbmclapi.service
    ```

## 相关命令 {#commands}

`systemctl start python-openbmclapi.service` - 启动 python-openbmclapi 服务。

`systemctl stop python-openbmclapi.service` - 关闭 python-openbmclapi 服务。

`systemctl reload python-openbmclapi.service` - 重新启动 python-openbmclapi 服务以应用最新配置。

`journalctl -f --output cat -u python-openbmclapi.service` - 实时查看 python-openbmclapi 的日志。
