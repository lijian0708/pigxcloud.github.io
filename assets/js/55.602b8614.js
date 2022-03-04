(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{523:function(s,t,a){"use strict";a.r(t);var e=a(29),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"macos终端利器iterm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos终端利器iterm2"}},[s._v("#")]),s._v(" macOS终端利器iTerm2")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("利用iTerm2+oh-my-zsh+Dracula主题打造我的Mac终端利器")])]),s._v(" "),a("p",[s._v("首先附上效果图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-02-13_17-03-47.png",alt:"iterm"}})]),s._v(" "),a("h2",{attrs:{id:"下载iterm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载iterm2"}},[s._v("#")]),s._v(" 下载"),a("a",{attrs:{href:"https://www.iterm2.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("iTerm2"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("我是在官网下载安装的"),a("a",{attrs:{href:"https://www.iterm2.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.iterm2.com/index.html"),a("OutboundLink")],1),s._v(" 直接点击"),a("code",[s._v("Download")]),s._v("下载。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-02-13_17-13-29.png",alt:"iterm"}})]),s._v(" "),a("h2",{attrs:{id:"下载oh-my-zsh-并切换shell为zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载oh-my-zsh-并切换shell为zsh"}},[s._v("#")]),s._v(" 下载"),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh"),a("OutboundLink")],1),s._v(" 并切换shell为zsh")]),s._v(" "),a("h3",{attrs:{id:"下载oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载oh-my-zsh"}},[s._v("#")]),s._v(" 下载oh-my-zsh")]),s._v(" "),a("p",[s._v("方式一: 使用git 这里下载到"),a("code",[s._v("~/.oh-my-zsh")]),s._v("下")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\n")])])]),a("p",[s._v("方式二: 使用curl")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),a("p",[s._v("方式三: 使用wget")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),a("h3",{attrs:{id:"创建一个新的配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的配置文件"}},[s._v("#")]),s._v(" 创建一个新的配置文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\n")])])]),a("h3",{attrs:{id:"切换默认shell为zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换默认shell为zsh"}},[s._v("#")]),s._v(" 切换默认shell为zsh")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ chsh -s /bin/zsh\n")])])]),a("h2",{attrs:{id:"更换zsh的主题为dracula"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换zsh的主题为dracula"}},[s._v("#")]),s._v(" 更换zsh的主题为"),a("a",{attrs:{href:"https://draculatheme.com/zsh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dracula"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"下载主题文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载主题文件"}},[s._v("#")]),s._v(" 下载主题文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/dracula/zsh.git\n")])])]),a("h3",{attrs:{id:"创建一个指向oh-my-zsh主题文件夹的符号链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个指向oh-my-zsh主题文件夹的符号链接"}},[s._v("#")]),s._v(" 创建一个指向Oh my zsh主题文件夹的符号链接")]),s._v(" "),a("p",[a("code",[s._v("DRACULA_THEME")]),s._v("是你刚才下载主题的目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DRACULA_THEME")]),s._v("/dracula.zsh-theme ~/.oh-my-zsh/themes/dracula.zsh-theme\n")])])]),a("p",[s._v("或者你可以移动主题文件dracula.zsh-theme到~/.oh-my-zsh/themes/下")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("显示隐藏文件夹的快捷键为command+shift+.")])]),s._v(" "),a("p",[s._v('修改zsh主题。编辑~(用户名)下.zshrc文件，修改ZSH_THEME为"dracula"')]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set name of the theme to load --- if set to "random", it will')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load a random theme each time oh-my-zsh is loaded, in which case,")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# to know which specific one was loaded, run: echo $RANDOM_THEME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#ZSH_THEME="robbyrussell"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dracula"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("!wq保存退出。")]),s._v(" "),a("p",[s._v("到这里，已经完成了zsh主题的配置，但是距离效果图还差那么一点点，那就是iterm2的主题和命令高亮插件。")]),s._v(" "),a("h2",{attrs:{id:"更换iterm2的主题为dracula"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换iterm2的主题为dracula"}},[s._v("#")]),s._v(" 更换iterm2的主题为"),a("a",{attrs:{href:"https://draculatheme.com/iterm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dracula"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("下载iterm2的Dracula主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/dracula/iterm.git\n")])])]),a("p",[s._v("设置主题：")]),s._v(" "),a("ol",[a("li",[s._v("iTerm2 > Preferences > Profiles > Colors Tab")]),s._v(" "),a("li",[s._v("Open the Color Presets...")]),s._v(" "),a("li",[s._v("从列表中选择import")]),s._v(" "),a("li",[s._v("选择刚才下载主题中"),a("code",[s._v("Dracula.itermcolors")]),s._v(" 文件，确定")])]),s._v(" "),a("p",[s._v("再次打开 Color Presets... ，选择Dracula")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-02-13_19-36-36.png",alt:"iterm"}})]),s._v(" "),a("h2",{attrs:{id:"命令高亮插件zsh-syntax-highlighting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令高亮插件zsh-syntax-highlighting"}},[s._v("#")]),s._v(" 命令高亮插件"),a("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-syntax-highlighting"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("命令正确绿色，命令错误红色")])]),s._v(" "),a("p",[s._v("效果图:\n"),a("img",{attrs:{src:"/img/2021-02-13_19-48-57.png",alt:"iterm"}})]),s._v(" "),a("p",[s._v("下载命令高亮插件 这里下载到用户名下.zsh文件夹下")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting\n")])])]),a("p",[s._v("编辑配置文件，使用插件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Which plugins would you like to load?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Standard plugins can be found in $ZSH/plugins/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Custom plugins may be added to $ZSH_CUSTOM/plugins/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example format: plugins=(rails git textmate ruby lighthouse)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add wisely, as too many plugins slow down shell startup.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH")]),s._v("/oh-my-zsh.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令高亮")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("!wq 保存退出。")]),s._v(" "),a("p",[s._v("OK，到这里就全部完成了，重启你的iTerm2，享受吧！")]),s._v(" "),a("h2",{attrs:{id:"命令提示插件zsh-autosuggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令提示插件zsh-autosuggestions"}},[s._v("#")]),s._v(" 命令提示插件"),a("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-autosuggestions"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("效果:输入g会出现相应提示，按↑即可补全")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-02-13_20-07-20.png",alt:"zsh-autosuggestions"}})]),s._v(" "),a("p",[s._v("下载命令提示插件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions\n")])])]),a("p",[s._v("编辑配置文件，使用插件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])])]),a("p",[s._v("添加以下内容:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Which plugins would you like to load?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Standard plugins can be found in $ZSH/plugins/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Custom plugins may be added to $ZSH_CUSTOM/plugins/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example format: plugins=(rails git textmate ruby lighthouse)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add wisely, as too many plugins slow down shell startup.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH")]),s._v("/oh-my-zsh.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令高亮")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令提示")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("h2",{attrs:{id:"提示技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示技巧"}},[s._v("#")]),s._v(" 提示技巧")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("将shell从bash切换到zsh之后，可能有的环境变量会失效，需要将原来在bash配置文件中的配置转移到zsh配置文件中，这里提供两个方式")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将bash配置文件~/.bash_profile中的环境变量等配置复制到zsh配置文件～/.zshrc中")])]),s._v(" "),a("li",[a("p",[s._v("在zsh配置文件～/.zshrc中添加下面这行")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("item2有很多技巧很好用，我列举一些我常用的技巧，读者可以自行搜索或者阅读"),a("a",{attrs:{href:"https://www.iterm2.com/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("来查看完整的技巧")])]),s._v(" "),a("ol",[a("li",[s._v("一些功能和快捷键:")])]),s._v(" "),a("ul",[a("li",[s._v("鼠标选中即复制;")]),s._v(" "),a("li",[s._v("command + d 垂直分屏")]),s._v(" "),a("li",[s._v("command + shift + d 水平分屏")]),s._v(" "),a("li",[s._v("command + shift + h 打开剪切板(复制历史)")]),s._v(" "),a("li",[s._v("command + ; 命令自动完成")]),s._v(" "),a("li",[s._v("command + shift + ; 查看历史命令")]),s._v(" "),a("li",[s._v("command + option + b 按键回放(输入命令回放, 通过时间线)")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("oh-my-zsh是很强大的，它用于管理zsh的配置，如果你是第一次使用可以参照oh-my-zsh"),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("，同样的，我会列举一些我常用的技巧")])]),s._v(" "),a("ol",[a("li",[s._v("可以使用alias命令查看一些命令的简写，用熟悉了会很方便")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜ ~ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v("\n-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -2'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -4'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -5'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -6'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -7'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -8'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd -9'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("h2",{attrs:{id:"iterm2-升级-3-0-后字体变细的解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterm2-升级-3-0-后字体变细的解决方法"}},[s._v("#")]),s._v(" iTerm2 升级 3.0 后字体变细的解决方法")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("iTerm2 升级了之后发现我设置的 Courier New 字体变细了\n查了一些 issues ，说并不是 bug 只是一个特性，虽然并不知道这个特性有什么好处，但是看惯了老版本粗字体的还是感觉不习惯， Prefs>profiles>text>Use thin strokes for anti-aliasd text 设置为 Never 即可恢复")])])])}),[],!1,null,null,null);t.default=r.exports}}]);