export default {
  title: 'ѣ',
  menu: {
    title: '导航',
    home: '家',
    homeDesc: '返回主页',
    sign: '连接',
    signDesc: '拿到钥匙',
    clear: '清楚',
    clearDesc: '清除设备上的痕迹',
    code: 'Github',
    codeDesc: '存储库',
    help: '常见问题',
    helpDesc: '关于',
    transaction: '交易事项',
    transactionDesc: '获取交易',
    contacts: '联系方式',
    contactsDesc: '查看联系人',
    topUsers: '与会者排名',
    topUsersDesc: '在第一批中找到自己！'
  },
  sign: {
    t1: '嗨！ 欢迎来到Yat，价值交换系统。 我已经为你想出了一个独特的助记符短语--把它当作你的数字签名，这是识别你自己所必需的。 我没有存储它，因此无法恢复。 现在只有你知道它，所以在纸上仔细写下来，或者至少通过点击它并将其放在某个地方来复制它。',
    t2: '并与我和其他参与者互动，你已经有了你的公共地址，这是直接从数字签名转移',
    t3: '剩下的工作就是输入并记住一个强大的密码',
    copy: '短语 短语被复制',
    pwd: '密码已复制',
    protect: '保护签名',
    pwd0: '密码太弱',
    pwd1: '密码强度低',
    pwd2: '好的密码',
    pwd3: '强密码',
    pwd4: '非常强的密码',
    pwdMust: '输入密码比较好',
    pwdMore: '最好输入超过6个字符',
    know: '我记得我的那句话！',
    mnemonic: '您的记忆短语',
    publicKey: '您的公共地址'
  },
  enter: {
    remember: '记住你的密码',
    hint: '助记短语密码'
  },
  failed: '失败了',
  success: '成功',
  password: '密码',
  cancel: '取消',
  ok: '好的',
  characters: '数字, 信, 特殊字符',
  next: '继续',
  get: '得到',
  send: '发送',
  slider: {
    w1: '开放性',
    w2: '不变性',
    w3: '可证明性',
    w4: '保护',
    w5: '可靠性'
  },
  titles: {
    topUsersTitle: '与会者排名',
    contacts: '联系方式'
  },

  transactionMessage: {
    successfull: '交易完成'
  },
  import: '出口/进口',
  dowloadJson: 'Скачать JSON-файл',
  uploadJson: 'JSON-файл',
  aboutPlatform: {
    bannerTexts: {
      banner1: '我们为什么可靠 ...'
    },
    navHeaderItems: {
      openness: '开放性',
      free: '免费',
      security: '安全'
    },
    opennessText: {
      p1: '它是一个开放的、不可更改的、可证明的分类账。',
      p2: '一个能让您透明地监控自己内部资金流动的系统。'
    },
    freeText: '免费查阅交易历史。',
    securityText: {
      p1: '每一笔连续的交易都带有前一笔交易的印记，这是改变后一笔交易内容不可逾越的障碍。',
      p2: '交易由发送方通过算法签名，消除了篡改的可能性。'
    }
  },
  errorMessages: {
    scanQr: {
      NotAllowedError: {
        headerErr: '摄像头的使用未经授权！',
        textErr: '根据隐私和数据保护政策，浏览器设置必须允许访问！请检查这一点。然后刷新页面，在第二次请求中允许访问设备摄像头。'
      },
      NotFoundError: '',
      NotSupportedError: '',
      NotReadableError: '',
      OverconstrainedError: '',
      StreamApiNotSupportedError: '',
      InsecureContextError: ''
    }
  },
  buttons: {
    requestCameraAccess: '请求访问摄像机',
    reloadPage: '重新载入页面'
  },
  confirmMessages: {
    clearDevice: {
      clearQuestion: '删除该设备的钱包访问权限？',
      info: "别担心！您可以使用记忆短语或 'ceed' 密钥在本设备或其他设备上重新访问您的钱包。"
    }
  }
}
