# <center>vanilla-whatsapp<center/>

<center>A simple <b>whatsapp chat</b>  clone plugin code in <b>vanilla javascript</b></center>

![vanilla-whatsapp cover](https://res.cloudinary.com/carlosdev96/image/upload/v1658245019/vanilla-whatsapp/vanilla-whatsapp-cover_rvtxnp.png)

## Table of contents
  - [Table of contents](#table-of-contents)
  - [Installation & Usage](#installation--usage)
  - [Customization](#customization)

## Installation & Usage

```bash
npm i vanilla-whatsapp
```

1. Import the plugin: add a `script` tag pointing to `vanilla-whatsapp.js`
```html
<html>
    <head>
    <link rel="stylesheet" href="<path-to-vanilla-whatsapp.css>">
    <script defer src="<path-to-vanilla-whatsapp.js>"></script>
    </head>
    <body>
        <!-- body content -->    
    </body>
</html>
```

2. Run the plugin
```js
window.initVanillaWhatsapp();
```

## Customization
```js
const whatsappData = {
  phoneNumber: "3432132132",
  positionButtonWhatsapp: {
    top: "",
    right: "15%",
    bottom: "2%",
    left: "",
  },
  images: {
    pathUserLogo: "",
  },
  replaceText: {
    header: {
      userName: "User name",
      slogan: "Usually responds the same day",
    },
    bodyChat: {
      messageOne: "Hello 👋",
      messageTwo: "How can I help you?",
    },
    linkToWhatsappButtonText: "Send message",
  },
};
window.initVanillaWhatsapp(whatsappData);
```

<span>Note: phone number must be preceded by the country prefix in the default option is 34 the prefix of Spain<span>