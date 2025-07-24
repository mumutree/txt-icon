// 高质量图标库 - 基于Lucide/Tabler设计标准
const ICON_LIBRARY = {
    // 基础形状 - 使用高质量SVG路径
    '爱心': {
        outline: 'M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572',
        filled: 'M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z'
    },
    '星星': {
        outline: 'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
        filled: 'M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z'
    },
    '房子': {
        outline: 'M5 12l-2 0l9 -9l9 9l-2 0l0 7a2 2 0 0 1 -2 2l-10 0a2 2 0 0 1 -2 -2l0 -7z M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6',
        filled: 'M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-4v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v8h-4a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0z'
    },
    '用户': {
        outline: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2',
        filled: 'M12 2a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z M14 14a4 4 0 0 1 4 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a4 4 0 0 1 4 -4h4z'
    },
    '设置': {
        outline: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
        filled: 'M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z'
    },
    '搜索': {
        outline: 'M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0 M21 21l-6 -6',
        filled: 'M10 3a7 7 0 0 1 4.897 11.968l4.396 4.396a1 1 0 0 1 -1.414 1.414l-4.396 -4.396a7 7 0 1 1 -3.483 -12.382z'
    },
    '邮件': {
        outline: 'M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z M3 7l9 6l9 -6',
        filled: 'M22 7.535V17a3 3 0 0 1 -2.824 2.995L19 20H5a3 3 0 0 1 -2.995 -2.824L2 17V7.535l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066L22 7.535z M19 4c.08 0 .161 .002 .243 .007l-7.243 4.829l-7.243 -4.829L5 4h14z'
    },
    '电话': {
        outline: 'M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2',
        filled: 'M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z'
    },
    '文件': {
        outline: 'M14 3v4a1 1 0 0 0 1 1h4 M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z M9 9l1 0 M9 13l6 0 M9 17l6 0',
        filled: 'M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z M16 12h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z M16 16h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z M10 8l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1z'
    },
    '图片': {
        outline: 'M15 8h.01 M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5 M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3',
        filled: 'M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3h14zm-1.99 3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-4.71 3.283a2 2 0 0 0 -2.827 0l-4.244 4.243a1 1 0 0 0 -.083 1.32l.083 .094l4.243 4.243a2 2 0 0 0 2.827 0l2.829 -2.829l2.828 2.829a2 2 0 0 0 2.827 0l4.243 -4.243a1 1 0 0 0 .083 -1.32l-.083 -.094l-4.243 -4.243a2 2 0 0 0 -2.827 0l-2.829 2.829l-2.828 -2.829z'
    },
    '音乐': {
        outline: 'M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0 M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0 M9 17v-13h10v13 M9 8h10',
        filled: 'M14 3v4a1 1 0 0 0 1 1h4l-5 -5z M17 7h-3v10.43a3 3 0 1 1 -2 -2.83v-11.6a1 1 0 0 1 1 -1h4a1 1 0 0 1 .8 .4l.2 .2l4 4a1 1 0 0 1 .2 .6v8.4a3 3 0 1 1 -2 -2.83v-5.57h-3z'
    },
    '视频': {
        outline: 'M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z M3 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-12z',
        filled: 'M18 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h8zm2.553 1.106a1 1 0 0 0 -1.447 .894v2.764l-1.106 -.553v-1.211a1 1 0 0 0 -1 -1h-8a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-1.211l1.106 -.553v2.764a1 1 0 0 0 1.447 .894l4.553 -2.276a1 1 0 0 0 0 -1.788l-4.553 -2.276z'
    },
    '购物车': {
        outline: 'M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6',
        filled: 'M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
    },
    '时钟': {
        outline: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
        filled: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'
    },
    '日历': {
        outline: 'M3 4h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M16 2v4 M8 2v4 M3 10h18',
        filled: 'M3 4h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'
    },
    '位置': {
        outline: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
        filled: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
    },
    '锁': {
        outline: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4',
        filled: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z'
    },
    '钥匙': {
        outline: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
        filled: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777z'
    },
    '眼睛': {
        outline: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
        filled: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'
    },
    '下载': {
        outline: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
        filled: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
    },
    '上传': {
        outline: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12',
        filled: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
    },
    '分享': {
        outline: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13',
        filled: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'
    },
    '加号': {
        outline: 'M12 5v14 M5 12h14',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 12h8 M12 8v8'
    },
    '减号': {
        outline: 'M5 12h14',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 12h8'
    },
    '叉号': {
        outline: 'M18 6L6 18 M6 6l12 12',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M15 9l-6 6 M9 9l6 6'
    },
    '对勾': {
        outline: 'M20 6L9 17l-5-5',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M9 12l2 2 4-4'
    },
    '箭头': {
        outline: 'M5 12h14 M12 5l7 7-7 7',
        filled: 'M5 12h14 M12 5l7 7-7 7'
    },
    '信息': {
        outline: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4 M12 16h.01',
        filled: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'
    },
    '警告': {
        outline: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
        filled: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'
    },
    '错误': {
        outline: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M15 9l-6 6 M9 9l6 6',
        filled: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'
    },
    '成功': {
        outline: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M9 12l2 2 4-4',
        filled: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'
    },
    '编辑': {
        outline: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
        filled: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
    },
    '垃圾桶': {
        outline: 'M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M10 11v6 M14 11v6',
        filled: 'M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'
    },
    '刷新': {
        outline: 'M23 4v6h-6 M1 20v-6h6 M20.49 9A9 9 0 0 0 5.64 5.64L1 10 M3.51 15a9 9 0 0 0 14.85 4.36L23 14',
        filled: 'M23 4v6h-6 M1 20v-6h6'
    },
    '菜单': {
        outline: 'M3 12h18 M3 6h18 M3 18h18',
        filled: 'M3 12h18 M3 6h18 M3 18h18'
    },
    '更多': {
        outline: 'M12 12h.01 M12 6h.01 M12 18h.01',
        filled: 'M12 12h.01 M12 6h.01 M12 18h.01'
    },
    '关闭': {
        outline: 'M18 6L6 18 M6 6l12 12',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M15 9l-6 6 M9 9l6 6'
    },
    '打开': {
        outline: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3',
        filled: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
    },
    '复制': {
        outline: 'M20 9H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
        filled: 'M20 9H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z'
    },
    '粘贴': {
        outline: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z',
        filled: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
    },
    '打印': {
        outline: 'M6 9V2h12v7 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14h12v8H6v-8z',
        filled: 'M6 9V2h12v7'
    },
    '保存': {
        outline: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z M17 21v-8H7v8 M7 3v5h8',
        filled: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'
    },
    '文件夹': {
        outline: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
        filled: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'
    },
    '云': {
        outline: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
        filled: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'
    },
    '太阳': {
        outline: 'M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
        filled: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z'
    },
    '月亮': {
        outline: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
        filled: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
    },
    '雨': {
        outline: 'M16 13v8l4-7h-4V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8 M8 21l4-7H8v-6',
        filled: 'M16 13v8l4-7h-4V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8'
    },
    '雪': {
        outline: 'M2 12h20 M12 2v20 M7.05 7.05L16.95 16.95 M7.05 16.95L16.95 7.05',
        filled: 'M2 12h20 M12 2v20'
    },
    '火': {
        outline: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
        filled: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'
    },
    '运动': {
        outline: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 12l2 2 4-4',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 12l2 2 4-4'
    },
    '足球': {
        outline: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 8l4 4 4-4 M8 16l4-4 4 4',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
    },
    '篮球': {
        outline: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
    },
    '健身': {
        outline: 'M7.01 10.49h-.01 M10.01 10.49h-.01 M13.01 10.49h-.01 M16.01 10.49h-.01 M6 2l3 6 2-3 3 6 M6 22l3-6 2 3 3-6',
        filled: 'M7.01 10.49h-.01 M10.01 10.49h-.01 M13.01 10.49h-.01 M16.01 10.49h-.01'
    },
    '企业': {
        outline: 'M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4 M9 9v.01 M9 12v.01 M9 15v.01 M9 18v.01 M13 9v.01 M13 12v.01 M13 15v.01 M13 18v.01',
        filled: 'M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4'
    },
    '公司': {
        outline: 'M3 21h18 M4 21V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13 M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11 M6 10h2 M6 13h2 M6 16h2 M16 13h2 M16 16h2',
        filled: 'M3 21h18 M4 21V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13 M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11'
    },
    '办公': {
        outline: 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4 M21 5H3',
        filled: 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z'
    },
    '商务': {
        outline: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M16 11l2 2 4-4',
        filled: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'
    },
    '工作': {
        outline: 'M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34 M18 2l4 4-8 8-4-4 8-8z',
        filled: 'M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'
    },
    '团队': {
        outline: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
        filled: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'
    },
    '会议': {
        outline: 'M8 21l4-7H8v-6 M16 13v8l4-7h-4V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8',
        filled: 'M8 21l4-7H8v-6 M16 13v8l4-7h-4V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8'
    },
    '网球': {
        outline: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12c5.523 0 10-4.477 10-10 M22 12c-5.523 0-10 4.477-10 10',
        filled: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
    },
    '游泳': {
        outline: 'M4 12a4 4 0 0 1 4-4h.01 M8 16a4 4 0 0 0 8 0 M20 12a4 4 0 0 0-4-4h-.01 M16 8a4 4 0 0 1-8 0 M2 20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2',
        filled: 'M4 12a4 4 0 0 1 4-4h.01 M8 16a4 4 0 0 0 8 0 M20 12a4 4 0 0 0-4-4h-.01'
    },
    '跑步': {
        outline: 'M13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M9.5 4.5L11 6l1.5-1.5L15 7l-1.5 1.5L15 10l-2.5-2.5L11 9l-1.5-1.5L7 10l1.5-1.5L7 7l2.5 2.5z M7 21l2-4 2 4 M15 21l-2-4-2 4',
        filled: 'M13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
    },
    '骑行': {
        outline: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 16h14 M11 14l-3-3 2-3h4l2 3-1 1',
        filled: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
    },
    '哑铃': {
        outline: 'M6.5 6.5h11 M6.5 17.5h11 M9 9v6 M15 9v6 M5 8v8 M19 8v8',
        filled: 'M6.5 6.5h11 M6.5 17.5h11 M9 9v6 M15 9v6'
    },
    // 交通工具类
    '汽车': {
        outline: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2 M2 10h20',
        filled: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2'
    },
    '飞机': {
        outline: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
        filled: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
    },
    '火车': {
        outline: 'M4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M17 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M8 12h8 M3 12h18 M5 19l-2 3 M19 19l2 3 M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8H5V6z',
        filled: 'M4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M17 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8H5V6z'
    },
    '自行车': {
        outline: 'M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M12 19l-2-3 2-3 M10 9l-2 3 2 3 M14 9l2 3-2 3 M18 8l-8 4-4-4h4l4-4',
        filled: 'M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
    },
    '摩托车': {
        outline: 'M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M12 19v-4l-3-3 5-4 2 3h3 M17 8h3 M8 8h5l3-5',
        filled: 'M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
    },
    '公交车': {
        outline: 'M4 16a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2 M7 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4z M17 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4z M4 8h16 M8 4v4 M16 4v4',
        filled: 'M4 16a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2 M7 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4z M17 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'
    },
    '地铁': {
        outline: 'M4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M17 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M5 19l-2 3 M19 19l2 3 M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8H5V6z M8 11h8 M12 6v5',
        filled: 'M4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M17 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8H5V6z'
    },
    '轮船': {
        outline: 'M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 M4 18l-1-3h18l-1 3 M11 12h2l3-8H8l3 8z M7 16h10',
        filled: 'M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1'
    },
    '卡车': {
        outline: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11h-1 M14 5h4l3 5v7h-2',
        filled: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11h-1'
    },
    '出租车': {
        outline: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2 M9 5h6 M12 2v3',
        filled: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2'
    },
    '交通': {
        outline: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2 M2 10h20',
        filled: 'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M5 17H3v-6l2-5h9l4 5v6h-2'
    },
    // 电子设备类
    '手机': {
        outline: 'M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7z M12 18h.01',
        filled: 'M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7z M12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
    },
    '电脑': {
        outline: 'M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4z M8 21h8 M12 17v4',
        filled: 'M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4z M8 21h8 M12 17v4'
    },
    '平板': {
        outline: 'M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z M12 18h.01',
        filled: 'M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z M12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
    },
    '笔记本': {
        outline: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z M4 15h16 M8 19h8',
        filled: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z M4 15h16 M8 19h8'
    },
    '键盘': {
        outline: 'M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z M6 10h.01 M10 10h.01 M14 10h.01 M18 10h.01 M6 14h.01 M10 14h.01 M14 14h.01 M18 14h.01',
        filled: 'M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z'
    },
    '鼠标': {
        outline: 'M12 2a6 6 0 0 1 6 6v8a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6z M12 2v6',
        filled: 'M12 2a6 6 0 0 1 6 6v8a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6z'
    },
    '耳机': {
        outline: 'M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z',
        filled: 'M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'
    },
    '相机': {
        outline: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
        filled: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
    },
    '游戏': {
        outline: 'M6 12a6 6 0 0 0 12 0 M12 2v2 M12 18v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M18 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41',
        filled: 'M6 12a6 6 0 0 0 12 0 M12 2v2 M12 18v2'
    }
};

// 关键词映射
const KEYWORD_MAP = {
    '心': '爱心',
    'heart': '爱心',
    'love': '爱心',
    '喜欢': '爱心',
    '红心': '爱心',
    'star': '星星',
    '五角星': '星星',
    '星': '星星',
    'home': '房子',
    '家': '房子',
    '房屋': '房子',
    '建筑': '房子',
    'user': '用户',
    '人': '用户',
    '头像': '用户',
    '个人': '用户',
    '账户': '用户',
    'setting': '设置',
    '配置': '设置',
    '齿轮': '设置',
    '选项': '设置',
    'search': '搜索',
    '查找': '搜索',
    '搜': '搜索',
    '找': '搜索',
    '放大镜': '搜索',
    'mail': '邮件',
    'email': '邮件',
    '信件': '邮件',
    '信封': '邮件',
    'phone': '手机',
    'call': '电话',
    '通话': '电话',
    '手机': '手机',
    'mobile': '手机',
    'smartphone': '手机',
    'cellphone': '手机',
    '移动电话': '手机',
    '智能手机': '手机',
    'file': '文件',
    '文档': '文件',
    '档案': '文件',
    'image': '图片',
    '照片': '图片',
    '图像': '图片',
    '相片': '图片',
    'music': '音乐',
    '歌曲': '音乐',
    '音符': '音乐',
    '播放': '音乐',
    'video': '视频',
    '影片': '视频',
    '电影': '视频',
    '播放器': '视频',
    'cart': '购物车',
    '购物': '购物车',
    '购买': '购物车',
    '商城': '购物车',
    'clock': '时钟',
    '时间': '时钟',
    '钟表': '时钟',
    'calendar': '日历',
    '日期': '日历',
    '日程': '日历',
    'location': '位置',
    '地图': '位置',
    '定位': '位置',
    '地点': '位置',
    'lock': '锁',
    '安全': '锁',
    '加锁': '锁',
    '保护': '锁',
    'key': '钥匙',
    '密钥': '钥匙',
    'eye': '眼睛',
    '查看': '眼睛',
    '可见': '眼睛',
    '显示': '眼睛',
    'download': '下载',
    '下载': '下载',
    '保存': '下载',
    'upload': '上传',
    '上传': '上传',
    '发送': '上传',
    'share': '分享',
    '分享': '分享',
    '共享': '分享',
    'plus': '加号',
    '添加': '加号',
    '新增': '加号',
    '增加': '加号',
    '+': '加号',
    'minus': '减号',
    '删除': '减号',
    '减少': '减号',
    '移除': '减号',
    '-': '减号',
    'close': '叉号',
    '关闭': '叉号',
    '取消': '叉号',
    '×': '叉号',
    'x': '叉号',
    'check': '对勾',
    '确认': '对勾',
    '完成': '对勾',
    '正确': '对勾',
    '√': '对勾',
    '✓': '对勾',
    'arrow': '箭头',
    '方向': '箭头',
    '指向': '箭头',
    'info': '信息',
    '消息': '信息',
    '提示': '信息',
    'warning': '警告',
    '注意': '警告',
    '小心': '警告',
    'error': '错误',
    '失败': '错误',
    '异常': '错误',
    'success': '成功',
    '通过': '成功',
    'edit': '编辑',
    '修改': '编辑',
    '编写': '编辑',
    'trash': '垃圾桶',
    '垃圾': '垃圾桶',
    '回收站': '垃圾桶',
    'refresh': '刷新',
    '重新加载': '刷新',
    '更新': '刷新',
    'menu': '菜单',
    '导航': '菜单',
    '列表': '菜单',
    'more': '更多',
    '其他': '更多',
    '额外': '更多',
    'open': '打开',
    '启动': '打开',
    '运行': '打开',
    'copy': '复制',
    '拷贝': '复制',
    'paste': '粘贴',
    '贴': '粘贴',
    'print': '打印',
    '打印机': '打印',
    'save': '保存',
    '存储': '保存',
    'folder': '文件夹',
    '目录': '文件夹',
    'cloud': '云',
    '云端': '云',
    '云存储': '云',
    'sun': '太阳',
    '阳光': '太阳',
    '白天': '太阳',
    'moon': '月亮',
    '夜晚': '月亮',
    '黑夜': '月亮',
    'rain': '雨',
    '下雨': '雨',
    '雨天': '雨',
    'snow': '雪',
    '下雪': '雪',
    '雪花': '雪',
    'fire': '火',
    '火焰': '火',
    '燃烧': '火',
    'sport': '运动',
    'sports': '运动',
    '运动': '运动',
    '体育': '运动',
    '锻炼': '运动',
    'exercise': '运动',
    'football': '足球',
    '足球': '足球',
    'soccer': '足球',
    'basketball': '篮球',
    '篮球': '篮球',
    'fitness': '健身',
    '健身': '健身',
    '健美': '健身',
    'gym': '健身',
    'workout': '健身',
    'business': '企业',
    'company': '公司',
    'enterprise': '企业',
    '企业': '企业',
    '公司': '公司',
    '商业': '企业',
    '商务': '商务',
    'office': '办公',
    '办公': '办公',
    // 交通相关关键词
    'car': '汽车',
    'auto': '汽车',
    'vehicle': '汽车',
    '汽车': '汽车',
    '车': '汽车',
    '小车': '汽车',
    'plane': '飞机',
    'airplane': '飞机',
    'aircraft': '飞机',
    '飞机': '飞机',
    '航班': '飞机',
    '航空': '飞机',
    'train': '火车',
    '火车': '火车',
    '列车': '火车',
    '高铁': '火车',
    'bike': '自行车',
    'bicycle': '自行车',
    '自行车': '自行车',
    '单车': '自行车',
    'motorcycle': '摩托车',
    '摩托车': '摩托车',
    '摩托': '摩托车',
    'bus': '公交车',
    '公交车': '公交车',
    '公交': '公交车',
    '巴士': '公交车',
    'subway': '地铁',
    'metro': '地铁',
    '地铁': '地铁',
    '轨道': '地铁',
    'ship': '轮船',
    'boat': '轮船',
    '轮船': '轮船',
    '船': '轮船',
    '游轮': '轮船',
    'truck': '卡车',
    '卡车': '卡车',
    '货车': '卡车',
    'taxi': '出租车',
    '出租车': '出租车',
    '的士': '出租车',
    'transport': '交通',
    'transportation': '交通',
    'traffic': '交通',
    '交通': '交通',
    '运输': '交通',
    '出行': '交通',
    '办公室': '办公',
    'work': '工作',
    '工作': '工作',
    '职业': '工作',
    'team': '团队',
    '团队': '团队',
    '小组': '团队',
    'meeting': '会议',
    '会议': '会议',
    '开会': '会议',
    'tennis': '网球',
    '网球': '网球',
    'swimming': '游泳',
    '游泳': '游泳',
    'swim': '游泳',
    'running': '跑步',
    '跑步': '跑步',
    'run': '跑步',
    '慢跑': '跑步',
    'cycling': '骑行',
    '骑行': '骑行',
    'bike': '骑行',
    '自行车': '骑行',
    'dumbbell': '哑铃',
    '哑铃': '哑铃',
    '举重': '哑铃',
    'weight': '哑铃',
    // 电子设备相关关键词
    'computer': '电脑',
    'pc': '电脑',
    'laptop': '笔记本',
    '电脑': '电脑',
    '计算机': '电脑',
    '台式机': '电脑',
    '笔记本': '笔记本',
    '笔记本电脑': '笔记本',
    'notebook': '笔记本',
    'tablet': '平板',
    '平板': '平板',
    '平板电脑': '平板',
    'ipad': '平板',
    'keyboard': '键盘',
    '键盘': '键盘',
    'mouse': '鼠标',
    '鼠标': '鼠标',
    'headphone': '耳机',
    'headphones': '耳机',
    '耳机': '耳机',
    '耳麦': '耳机',
    'camera': '相机',
    '相机': '相机',
    '照相机': '相机',
    'photo': '相机',
    'game': '游戏',
    'gaming': '游戏',
    '游戏': '游戏',
    '电游': '游戏',
    '电子游戏': '游戏',
    // 更多运动相关关键词
    '体操': '运动',
    '瑜伽': '运动',
    'yoga': '运动',
    '武术': '运动',
    '太极': '运动',
    '拳击': '运动',
    'boxing': '运动',
    '羽毛球': '运动',
    'badminton': '运动',
    '乒乓球': '运动',
    'pingpong': '运动',
    '排球': '运动',
    'volleyball': '运动',
    '高尔夫': '运动',
    'golf': '运动',
    '滑雪': '运动',
    'skiing': '运动',
    '滑冰': '运动',
    'skating': '运动',
    '攀岩': '运动',
    'climbing': '运动',
    '登山': '运动',
    'hiking': '运动',
    '徒步': '运动'
};

// 应用状态
class AppState {
    constructor() {
        this.currentIcon = null;
        this.currentStyle = 'filled';
        this.currentColor = '#3498db';
        this.currentSize = 24;
        this.currentBackground = 'light';
        this.isGenerating = false;
    }

    updateIcon(iconData) {
        this.currentIcon = iconData;
        this.renderPreview();
        this.renderSizePreviews();
    }

    updateStyle(style) {
        this.currentStyle = style;
        if (this.currentIcon) {
            this.renderPreview();
            this.renderSizePreviews();
        }
        
        // 更新预览区域的视觉反馈
        const styleCanvases = {
            'outline': 'previewOutline',
            'filled': 'previewFilled',
            'duotone': 'previewDuotone',
            'flat': 'previewFlat',
            'gradient': 'previewGradient',
            'shadow': 'previewShadow',
            'glow': 'previewGlow'
        };
        
        // 移除所有active类
        Object.values(styleCanvases).forEach(canvasId => {
            const canvas = document.getElementById(canvasId);
            const item = canvas.closest('.style-preview-item');
            canvas.classList.remove('active');
            item.classList.remove('active');
        });
        
        // 添加当前选中风格的active类
        const currentCanvasId = styleCanvases[style];
        if (currentCanvasId) {
            const canvas = document.getElementById(currentCanvasId);
            const item = canvas.closest('.style-preview-item');
            canvas.classList.add('active');
            item.classList.add('active');
        }
    }

    updateColor(color) {
        this.currentColor = color;
        if (this.currentIcon) {
            this.renderPreview();
            this.renderSizePreviews();
        }
    }

    updateSize(size) {
        this.currentSize = parseInt(size);
    }

    updateBackground(bg) {
        this.currentBackground = bg;
        
        // 更新所有预览画布的背景
        const canvases = [
            'previewOutline',
            'previewFilled', 
            'previewDuotone',
            'previewFlat',
            'previewGradient',
            'previewShadow',
            'previewGlow'
        ];
        
        canvases.forEach(canvasId => {
            const canvas = document.getElementById(canvasId);
            if (canvas) {
                canvas.className = `style-preview-canvas ${bg}-bg`;
            }
        });
    }

    renderPreview() {
        const styles = ['outline', 'filled', 'duotone', 'flat', 'gradient', 'shadow', 'glow'];
        const styleLabels = ['线性', '填充', '双色', '扁平', '渐变', '阴影', '发光'];
        
        styles.forEach((style, index) => {
            const canvasId = `preview${style.charAt(0).toUpperCase() + style.slice(1)}`;
            const canvas = document.getElementById(canvasId);
            
            if (!canvas) return; // 如果canvas不存在，跳过
            
            if (!this.currentIcon) {
                // 为不同样式设置不同的占位符
                let placeholderSVG;
                switch(style) {
                    case 'filled':
                    case 'flat':
                    case 'gradient':
                    case 'shadow':
                    case 'glow':
                        placeholderSVG = `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                        </svg>`;
                        break;
                    default:
                        placeholderSVG = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                        </svg>`;
                }
                
                canvas.innerHTML = `<div class="placeholder">${placeholderSVG}</div>`;
                return;
            }

            const svg = this.generateSVG(this.currentIcon, 48, style);
            canvas.innerHTML = `<div class="generated-icon icon-enter">${svg}</div>`;
        });
    }

    renderSizePreviews() {
        if (!this.currentIcon) return;

        const sizes = [16, 24, 32, 48, 64];
        sizes.forEach(size => {
            const container = document.querySelector(`[data-size="${size}"]`);
            const svg = this.generateSVG(this.currentIcon, size);
            container.innerHTML = svg;
        });
    }

    generateSVG(iconData, size, style = null) {
        const iconName = iconData.name || iconData;
        const iconLibraryData = ICON_LIBRARY[iconName];
        if (!iconLibraryData) {
            throw new Error(`图标 ${iconName} 不存在`);
        }
        
        const currentStyle = style || this.currentStyle;
        const path = iconLibraryData[currentStyle] || iconLibraryData.outline;
        
        let strokeWidth, fill, stroke, filter = '', defs = '';
        
        // 生成渐变和滤镜定义
        const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
        const shadowId = `shadow-${Math.random().toString(36).substr(2, 9)}`;
        const glowId = `glow-${Math.random().toString(36).substr(2, 9)}`;
        
        switch(currentStyle) {
            case 'filled':
                strokeWidth = 0;
                fill = this.currentColor;
                stroke = 'none';
                break;
            case 'flat':
                strokeWidth = 0;
                fill = this.currentColor;
                stroke = 'none';
                break;
            case 'duotone':
                strokeWidth = 1.5;
                fill = `${this.currentColor}30`; // 30% opacity
                stroke = this.currentColor;
                break;
            case 'gradient':
                strokeWidth = 0;
                // 创建渐变填充
                const color = this.currentColor;
                const lighterColor = this.lightenColor(color, 30);
                defs = `
                    <defs>
                        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="${lighterColor}"/>
                            <stop offset="100%" stop-color="${color}"/>
                        </linearGradient>
                    </defs>
                `;
                fill = `url(#${gradientId})`;
                stroke = 'none';
                break;
            case 'shadow':
                strokeWidth = 0;
                fill = this.currentColor;
                stroke = 'none';
                // 添加阴影效果
                defs = `
                    <defs>
                        <filter id="${shadowId}" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="${this.currentColor}" flood-opacity="0.3"/>
                        </filter>
                    </defs>
                `;
                filter = `filter="url(#${shadowId})"`;
                break;
            case 'glow':
                strokeWidth = 0;
                fill = this.currentColor;
                stroke = 'none';
                // 添加发光效果
                defs = `
                    <defs>
                        <filter id="${glowId}" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                `;
                filter = `filter="url(#${glowId})"`;
                break;
            case 'outline':
            default:
                strokeWidth = 2;
                fill = 'none';
                stroke = this.currentColor;
                break;
        }

        return `
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                ${defs}
                <path d="${path}" ${filter}/>
            </svg>
        `;
    }
    
    // 颜色处理辅助函数
    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
}

// 语义解析器
class SemanticParser {
    static parse(text) {
        const originalText = text;
        const tokens = text.toLowerCase().trim().split(/\s+/);
        
        // 查找核心图标 - 精确匹配
        let coreIcon = null;
        let confidence = 0;
        
        // 1. 直接匹配图标库
        for (const token of tokens) {
            if (ICON_LIBRARY[token]) {
                coreIcon = token;
                confidence = 1.0;
                break;
            }
        }
        
        // 2. 关键词映射匹配
        if (!coreIcon) {
            for (const token of tokens) {
                if (KEYWORD_MAP[token]) {
                    coreIcon = KEYWORD_MAP[token];
                    confidence = 0.9;
                    break;
                }
            }
        }

        // 3. 部分匹配 - 检查是否包含关键词
        if (!coreIcon) {
            for (const token of tokens) {
                for (const [key, value] of Object.entries(KEYWORD_MAP)) {
                    if (key.length > 1 && (key.includes(token) || token.includes(key))) {
                        coreIcon = value;
                        confidence = 0.7;
                        break;
                    }
                }
                if (coreIcon) break;
            }
        }
        
        // 4. 模糊匹配 - 检查图标库中的图标名称
        if (!coreIcon) {
            for (const token of tokens) {
                for (const iconName of Object.keys(ICON_LIBRARY)) {
                    if (iconName.includes(token) || token.includes(iconName)) {
                        coreIcon = iconName;
                        confidence = 0.6;
                        break;
                    }
                }
                if (coreIcon) break;
            }
        }
        
        // 5. 英文单词匹配
        if (!coreIcon) {
            const englishWords = tokens.filter(token => /^[a-zA-Z]+$/.test(token));
            for (const word of englishWords) {
                for (const [key, value] of Object.entries(KEYWORD_MAP)) {
                    if (key === word) {
                        coreIcon = value;
                        confidence = 0.8;
                        break;
                    }
                }
                if (coreIcon) break;
            }
        }

        // 识别样式特征
        const style = {
            filled: tokens.includes('填充') || tokens.includes('实心') || tokens.includes('填满'),
            outline: tokens.includes('线性') || tokens.includes('轮廓') || tokens.includes('空心') || tokens.includes('线条'),
            rounded: tokens.includes('圆角') || tokens.includes('圆润') || tokens.includes('圆形'),
            duotone: tokens.includes('双色') || tokens.includes('渐变') || tokens.includes('多色')
        };

        return {
            core: coreIcon,
            style: style,
            confidence: confidence,
            originalText: originalText
        };
    }

    static getRecommendations(text) {
        const tokens = text.toLowerCase().trim().split(/\s+/);
        const recommendations = [];
        
        // 基于关键词推荐
        for (const token of tokens) {
            for (const [key, value] of Object.entries(KEYWORD_MAP)) {
                if (key.includes(token) || token.includes(key)) {
                    if (!recommendations.includes(value)) {
                        recommendations.push(value);
                    }
                }
            }
        }

        // 如果没有推荐，返回热门图标
        if (recommendations.length === 0) {
            recommendations.push('爱心', '星星', '用户', '设置', '搜索');
        }

        return recommendations.slice(0, 5);
    }
}

// 图标生成器
class IconGenerator {
    static generate(description) {
        const parsed = SemanticParser.parse(description);
        
        if (!parsed.core) {
            // 如果没有找到匹配的图标，提供默认图标
            const defaultIcon = this.getDefaultIcon(description);
            const iconData = ICON_LIBRARY[defaultIcon];
            
            return {
                name: defaultIcon,
                outline: iconData.outline,
                filled: iconData.filled,
                style: parsed.style,
                confidence: 0.3,
                isDefault: true,
                message: `未找到完全匹配的图标，显示默认图标"${defaultIcon}"`,
                suggestions: this.getSimilarIcons(description)
            };
        }

        const iconData = ICON_LIBRARY[parsed.core];
        if (!iconData) {
            throw new Error('图标库中未找到对应图标');
        }

        return {
            name: parsed.core,
            outline: iconData.outline,
            filled: iconData.filled,
            style: parsed.style,
            confidence: parsed.confidence,
            isDefault: false
        };
    }
    
    static getDefaultIcon(text) {
        // 根据文本内容选择合适的默认图标
        const tokens = text.toLowerCase().split(/\s+/);
        
        // 检查是否包含某些通用词汇
        if (tokens.some(token => ['文件', 'file', '文档', 'document'].includes(token))) {
            return '文件';
        }
        if (tokens.some(token => ['用户', 'user', '人', 'person', '账户'].includes(token))) {
            return '用户';
        }
        if (tokens.some(token => ['设置', 'setting', '配置', 'config'].includes(token))) {
            return '设置';
        }
        if (tokens.some(token => ['搜索', 'search', '查找', 'find'].includes(token))) {
            return '搜索';
        }
        if (tokens.some(token => ['邮件', 'email', '邮箱', 'mail'].includes(token))) {
            return '邮件';
        }
        
        // 默认返回一个通用图标
        return '星星';
    }

    static getSimilarIcons(iconName) {
        const similar = [];
        const allIcons = Object.keys(ICON_LIBRARY);
        
        // 简单的相似度计算
        for (const icon of allIcons) {
            if (icon !== iconName) {
                similar.push(icon);
            }
        }
        
        return similar.slice(0, 3);
    }
}

// 导出功能
class ExportManager {
    static async exportSVG(appState) {
        if (!appState.currentIcon) {
            throw new Error('没有可导出的图标');
        }

        const svg = appState.generateSVG(appState.currentIcon, appState.currentSize);
        const fileName = `${appState.currentIcon.name}-${appState.currentSize}px.svg`;
        
        // 检查是否支持文件系统访问API
        if ('showSaveFilePicker' in window) {
            try {
                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: fileName,
                    types: [{
                        description: 'SVG files',
                        accept: { 'image/svg+xml': ['.svg'] }
                    }]
                });
                
                const writable = await fileHandle.createWritable();
                await writable.write(svg);
                await writable.close();
                
                showToast('SVG文件保存成功！', 'success');
                return;
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('保存文件失败:', err);
                }
                // 如果用户取消或出错，回退到默认下载方式
            }
        }
        
        // 回退到传统下载方式
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    static async exportPNG(appState) {
        if (!appState.currentIcon) {
            throw new Error('没有可导出的图标');
        }

        const svg = appState.generateSVG(appState.currentIcon, appState.currentSize);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        const fileName = `${appState.currentIcon.name}-${appState.currentSize}px.png`;
        
        canvas.width = appState.currentSize;
        canvas.height = appState.currentSize;
        
        img.onload = async function() {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(async function(blob) {
                // 检查是否支持文件系统访问API
                if ('showSaveFilePicker' in window) {
                    try {
                        const fileHandle = await window.showSaveFilePicker({
                            suggestedName: fileName,
                            types: [{
                                description: 'PNG files',
                                accept: { 'image/png': ['.png'] }
                            }]
                        });
                        
                        const writable = await fileHandle.createWritable();
                        await writable.write(blob);
                        await writable.close();
                        
                        showToast('PNG文件保存成功！', 'success');
                        return;
                    } catch (err) {
                        if (err.name !== 'AbortError') {
                            console.error('保存文件失败:', err);
                        }
                        // 如果用户取消或出错，回退到默认下载方式
                    }
                }
                
                // 回退到传统下载方式
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        };
        
        const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        img.src = url;
    }

    static copyCode(appState, format = 'react') {
        if (!appState.currentIcon) {
            throw new Error('没有可复制的代码');
        }

        let code = '';
        const svg = appState.generateSVG(appState.currentIcon, appState.currentSize);
        
        if (format === 'react') {
            code = `import React from 'react';

const ${appState.currentIcon.name.charAt(0).toUpperCase() + appState.currentIcon.name.slice(1)}Icon = () => (
  ${svg.replace(/stroke-width/g, 'strokeWidth').replace(/stroke-linecap/g, 'strokeLinecap').replace(/stroke-linejoin/g, 'strokeLinejoin')}
);

export default ${appState.currentIcon.name.charAt(0).toUpperCase() + appState.currentIcon.name.slice(1)}Icon;`;
        } else if (format === 'vue') {
            code = `<template>
  ${svg}
</template>

<script>
export default {
  name: '${appState.currentIcon.name.charAt(0).toUpperCase() + appState.currentIcon.name.slice(1)}Icon'
}
</script>`;
        } else {
            code = svg;
        }

        navigator.clipboard.writeText(code).then(() => {
            showToast('代码已复制到剪贴板', 'success');
        }).catch(() => {
            showToast('复制失败，请手动复制', 'error');
        });
    }

    static async exportAllSizes(appState) {
        if (!appState.currentIcon) {
            throw new Error('没有可导出的图标');
        }

        // 常用的所有尺寸
        const allSizes = [16, 24, 32, 48, 64];
        const iconName = appState.currentIcon.name;
        
        // 检查是否支持文件系统访问API
        if ('showDirectoryPicker' in window) {
            try {
                const directoryHandle = await window.showDirectoryPicker();
                
                showToast(`开始保存 ${allSizes.length} 个尺寸的PNG图标文件到选择的目录...`, 'info');
                
                let completedCount = 0;
                
                for (const size of allSizes) {
                    const svg = appState.generateSVG(appState.currentIcon, size);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    
                    canvas.width = size;
                    canvas.height = size;
                    
                    await new Promise((resolve) => {
                        img.onload = async function() {
                            ctx.drawImage(img, 0, 0);
                            canvas.toBlob(async function(blob) {
                                try {
                                    const fileName = `${iconName}-${size}px.png`;
                                    const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
                                    const writable = await fileHandle.createWritable();
                                    await writable.write(blob);
                                    await writable.close();
                                    
                                    completedCount++;
                                    if (completedCount === allSizes.length) {
                                        showToast(`所有尺寸PNG图标保存完成！共 ${allSizes.length} 个文件`, 'success');
                                    }
                                } catch (err) {
                                    console.error(`保存 ${size}px 文件失败:`, err);
                                    showToast(`保存 ${size}px 文件失败`, 'error');
                                }
                                resolve();
                            });
                        };
                        
                        const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
                        const urlForImg = URL.createObjectURL(svgBlob);
                        img.src = urlForImg;
                    });
                }
                
                return;
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('选择目录失败:', err);
                    showToast('选择目录失败，将使用默认下载方式', 'warning');
                }
                // 如果用户取消或出错，回退到默认下载方式
            }
        }
        
        // 回退到传统下载方式
        const downloads = [];
        let completedCount = 0;
        
        showToast(`开始下载 ${allSizes.length} 个尺寸的PNG图标文件...`, 'info');
        
        allSizes.forEach((size, index) => {
            const svg = appState.generateSVG(appState.currentIcon, size);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            canvas.width = size;
            canvas.height = size;
            
            const pngPromise = new Promise((resolve) => {
                img.onload = function() {
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob(function(blob) {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${iconName}-${size}px.png`;
                        document.body.appendChild(a);
                        
                        // 延迟下载PNG文件
                        setTimeout(() => {
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                            
                            completedCount++;
                            if (completedCount === allSizes.length) {
                                showToast(`所有尺寸PNG图标下载完成！共 ${allSizes.length} 个文件`, 'success');
                            }
                            resolve();
                        }, index * 100);
                    });
                };
                
                const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
                const urlForImg = URL.createObjectURL(svgBlob);
                img.src = urlForImg;
            });
            
            downloads.push(pngPromise);
        });
        
        return downloads;
    }
}

// 工具函数
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 应用初始化
class App {
    constructor() {
        this.state = new AppState();
        this.initializeEventListeners();
        this.initializeColorControls();
    }

    initializeEventListeners() {
        // 生成按钮
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.addEventListener('click', () => this.generateIcon());

        // 输入框回车生成
        const descriptionInput = document.getElementById('description');
        descriptionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateIcon();
            }
        });

        // 实时预览（防抖）
        const debouncedGenerate = debounce(() => {
            const description = descriptionInput.value.trim();
            if (description) {
                this.generateIcon();
            }
        }, 1000);
        descriptionInput.addEventListener('input', debouncedGenerate);

        // 预览区域点击选择风格
        const styleCanvases = {
            'previewOutline': 'outline',
            'previewFilled': 'filled',
            'previewDuotone': 'duotone',
            'previewFlat': 'flat',
            'previewGradient': 'gradient',
            'previewShadow': 'shadow',
            'previewGlow': 'glow'
        };
        
        Object.entries(styleCanvases).forEach(([canvasId, style]) => {
            const canvas = document.getElementById(canvasId);
            canvas.addEventListener('click', () => {
                // 更新状态
                this.state.updateStyle(style);
                
                // 添加视觉反馈
                canvas.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    canvas.style.transform = '';
                }, 150);
                
                const styleNames = {
                    'outline': '线性',
                    'filled': '填充',
                    'duotone': '双色',
                    'flat': '扁平',
                    'gradient': '渐变',
                    'shadow': '阴影',
                    'glow': '发光'
                };
                showToast(`已切换到${styleNames[style]}风格`, 'info');
            });
        });

        // 尺寸预览点击选择
        const sizeItems = document.querySelectorAll('.size-item');
        sizeItems.forEach(item => {
            item.addEventListener('click', () => {
                const sizeIcon = item.querySelector('.size-icon');
                const size = sizeIcon.dataset.size;
                
                // 更新状态
                this.state.updateSize(size);
                
                // 添加视觉反馈
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 150);
                
                showToast(`已切换到${size}px尺寸`, 'info');
            });
        });

        // 背景切换
        const bgButtons = document.querySelectorAll('.bg-btn');
        bgButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                bgButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.state.updateBackground(e.target.dataset.bg);
            });
        });

        // 导出按钮
        document.getElementById('exportSvg').addEventListener('click', async () => {
            try {
                await ExportManager.exportSVG(this.state);
            } catch (error) {
                showToast(error.message, 'error');
            }
        });

        document.getElementById('exportPng').addEventListener('click', async () => {
            try {
                await ExportManager.exportPNG(this.state);
            } catch (error) {
                showToast(error.message, 'error');
            }
        });

        document.getElementById('exportExtension').addEventListener('click', async () => {
            try {
                await ExportManager.exportAllSizes(this.state);
            } catch (error) {
                showToast(error.message, 'error');
            }
        });

        document.getElementById('copyCode').addEventListener('click', () => {
            try {
                ExportManager.copyCode(this.state, 'react');
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }

    initializeColorControls() {
        const colorPicker = document.getElementById('colorPicker');
        const colorInput = document.getElementById('colorInput');
        const colorPresets = document.querySelectorAll('.color-preset');

        // 颜色选择器
        colorPicker.addEventListener('change', (e) => {
            const color = e.target.value;
            colorInput.value = color;
            this.state.updateColor(color);
            this.updateActivePreset(color);
        });

        // 颜色输入框
        colorInput.addEventListener('change', (e) => {
            const color = e.target.value;
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                colorPicker.value = color;
                this.state.updateColor(color);
                this.updateActivePreset(color);
            }
        });

        // 预设颜色
        colorPresets.forEach(preset => {
            preset.addEventListener('click', (e) => {
                const color = e.target.dataset.color;
                colorPicker.value = color;
                colorInput.value = color;
                this.state.updateColor(color);
                this.updateActivePreset(color);
            });
        });

        // 设置初始活跃预设
        this.updateActivePreset(this.state.currentColor);
    }

    updateActivePreset(color) {
        const presets = document.querySelectorAll('.color-preset');
        presets.forEach(preset => {
            preset.classList.toggle('active', preset.dataset.color === color);
        });
    }

    async generateIcon() {
        const description = document.getElementById('description').value.trim();
        
        if (!description) {
            showToast('请输入图标描述', 'error');
            return;
        }

        if (this.state.isGenerating) {
            return;
        }

        this.state.isGenerating = true;
        const generateBtn = document.getElementById('generateBtn');
        const originalText = generateBtn.textContent;
        generateBtn.innerHTML = '<span class="loading"></span> 生成中...';
        generateBtn.disabled = true;

        try {
            // 模拟异步处理
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const iconData = IconGenerator.generate(description);
            this.state.updateIcon(iconData);
            
            // 根据生成结果显示不同的消息
            if (iconData.isDefault) {
                showToast(iconData.message, 'warning');
            } else if (iconData.confidence < 0.5) {
                showToast('图标匹配度较低，建议调整描述', 'warning');
            } else if (iconData.confidence >= 0.8) {
                showToast(`成功生成"${iconData.name}"图标`, 'success');
            } else {
                showToast(`找到相关图标"${iconData.name}"`, 'info');
            }
        } catch (error) {
            showToast(error.message, 'error');
            
            // 显示推荐
            const recommendations = SemanticParser.getRecommendations(description);
            if (recommendations.length > 0) {
                setTimeout(() => {
                    showToast(`推荐尝试：${recommendations.join('、')}`, 'info');
                }, 1000);
            }
        } finally {
            this.state.isGenerating = false;
            generateBtn.textContent = originalText;
            generateBtn.disabled = false;
        }
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    new App();
    console.log('文字生成图标工具已启动');
});