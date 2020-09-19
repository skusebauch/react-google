// mock API for development purpose
export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - Elon Musk",
        totalResults: "76700000",
        searchTerms: "Elon Musk",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "be7219b01d043efdb",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - Elon Musk",
        totalResults: "76700000",
        searchTerms: "Elon Musk",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "be7219b01d043efdb",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.635963,
    formattedSearchTime: "0.64",
    totalResults: "76700000",
    formattedTotalResults: "76,700,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Elon Musk - Wikipedia",
      htmlTitle: "\u003cb\u003eElon Musk\u003c/b\u003e - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Elon_Musk",
      displayLink: "en.wikipedia.org",
      snippet:
        "Elon Reeve Musk FRS is a business magnate, industrial designer, engineer, and \nphilanthropist. He is the founder, CEO, CTO and chief designer of SpaceX; ...",
      htmlSnippet:
        "\u003cb\u003eElon\u003c/b\u003e Reeve \u003cb\u003eMusk\u003c/b\u003e FRS is a business magnate, industrial designer, engineer, and \u003cbr\u003e\nphilanthropist. He is the founder, CEO, CTO and chief designer of SpaceX;&nbsp;...",
      cacheId: "cElLiMk8T9MJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003eElon\u003c/b\u003e_\u003cb\u003eMusk\u003c/b\u003e",
      pagemap: {
        hcard: [
          {
            role: "EntrepreneurIndustrial designerEngineer",
            bday: "1971-06-28",
            fn: "Elon Musk",
            nickname: "Elon Reeve Musk",
            title:
              "Founder, CEO, lead designer of SpaceX CEO, product architect of Tesla, Inc. Founder of The Boring Company and X.com (now PayPal) Co-founder of Neuralink, OpenAI, and Zip2 Chairman of SolarCity",
            category:
              "South Africa (1971–present) Canada (1971–present) United States (2002–present)",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQD58EfVFT63NYnBKseA6JW9oQxN3dQFVYAfMql0n8YwYzStrAdlsoCEsSZ",
            width: "183",
            height: "275",
          },
        ],
        person: [
          {
            role:
              "Founder, CEO, lead designer of SpaceX CEO, product architect of Tesla, Inc. Founder of The Boring Company and X.com (now PayPal) Co-founder of Neuralink, OpenAI, and Zip2 Chairman of SolarCity",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
          },
        ],
        cse_image: [
          {
            src:
              "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Elon Musk (@elonmusk) | Twitter",
      htmlTitle:
        "\u003cb\u003eElon Musk\u003c/b\u003e (@\u003cb\u003eelonmusk\u003c/b\u003e) | Twitter",
      link: "https://twitter.com/elonmusk",
      displayLink: "twitter.com",
      snippet:
        'The latest Tweets from Elon Musk (@elonmusk): "We must pass The Great Filter"',
      htmlSnippet:
        "The latest Tweets from \u003cb\u003eElon Musk\u003c/b\u003e (@\u003cb\u003eelonmusk\u003c/b\u003e): &quot;We must pass The Great Filter&quot;",
      cacheId: "QjQEmo2sFzcJ",
      formattedUrl: "https://twitter.com/elonmusk",
      htmlFormattedUrl:
        "https://twitter.com/\u003cb\u003eelonmusk\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoQGsxC-ZCyqkPA8P3yNa2fHhBPq_MidNaX1Z_wpZWj1JHM5YvEB5uyttq",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#00aced",
            "al:android:url": "twitter://user?screen_name=elonmusk",
            "al:ios:app_name": "Twitter",
            "swift-page-section": "profile",
            "al:android:package": "com.twitter.android",
            "swift-page-name": "profile",
            "msapplication-tileimage":
              "//abs.twimg.com/favicons/win8-tile-144.png",
            "al:ios:url": "twitter://user?screen_name=elonmusk",
            "al:ios:app_store_id": "333903271",
            "al:android:app_name": "Twitter",
          },
        ],
        cse_image: [
          {
            src:
              "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Elon Musk",
      htmlTitle: "\u003cb\u003eElon Musk\u003c/b\u003e",
      link: "https://www.forbes.com/profile/elon-musk/",
      displayLink: "www.forbes.com",
      snippet:
        "Elon Musk is working to revolutionize transportation both on Earth, through \nelectric car maker Tesla - and in space, via rocket producer SpaceX. He owns 21\n% of ...",
      htmlSnippet:
        "\u003cb\u003eElon Musk\u003c/b\u003e is working to revolutionize transportation both on Earth, through \u003cbr\u003e\nelectric car maker Tesla - and in space, via rocket producer SpaceX. He owns 21\u003cbr\u003e\n% of&nbsp;...",
      cacheId: "pQ8CiBj7EMAJ",
      formattedUrl: "https://www.forbes.com/profile/elon-musk/",
      htmlFormattedUrl:
        "https://www.forbes.com/profile/\u003cb\u003eelon\u003c/b\u003e-\u003cb\u003emusk\u003c/b\u003e/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh1QPa2weXn_fDWScdqgx1Ldgmx_iZznQSlSsa0nClfT8Twkve4xkdyOc",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            image:
              "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Elon Musk",
            "og:site_name": "Forbes",
            "og:title": "Elon Musk",
            "og:image:type": "image/jpeg",
            "og:description":
              "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla - and in space, via rocket producer SpaceX. He owns 21% of Tesla but has pledged more than half his stake as collateral for loans; Forbes has discounted his stake to take the loans into account.",
            "twitter:image":
              "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
            referrer: "origin-when-cross-origin",
            "fb:app_id": "123694841080850",
            "twitter:site": "@forbes",
            viewport:
              "width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes",
            news_keywords: "Elon Musk",
            "twitter:description":
              "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla - and in space, via rocket producer SpaceX. He owns 21% of Tesla but has pledged more than half his stake as collateral for loans; Forbes has discounted his stake to take the loans into account.",
            "og:url": "https://www.forbes.com/profile/elon-musk/",
          },
        ],
        cse_image: [
          {
            src:
              "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "SpaceX",
      htmlTitle: "SpaceX",
      link: "https://www.spacex.com/",
      displayLink: "www.spacex.com",
      snippet:
        "SpaceX designs, manufactures and launches advanced rockets and spacecraft. \nThe company was founded in 2002 to revolutionize space technology, with the ...",
      htmlSnippet:
        "SpaceX designs, manufactures and launches advanced rockets and spacecraft. \u003cbr\u003e\nThe company was founded in 2002 to revolutionize space technology, with the&nbsp;...",
      cacheId: "fpZKzykc73AJ",
      formattedUrl: "https://www.spacex.com/",
      htmlFormattedUrl: "https://www.spacex.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRwIuqCGwH12ucCiceqeGczkdt8BwAKzqPNJBKkuAyc9UC3kHfUT-UkDSR",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image": "https://www.spacex.com/static/images/share.jpg",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "SpaceX",
            "og:site_name": "SpaceX",
            "og:title": "SpaceX",
            "og:description":
              "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
            "twitter:image": "https://www.spacex.com/static/images/share.jpg",
            "twitter:site": "@spacex",
            viewport: "width=device-width, maximum-scale=1.0, user-scalable=1",
            "twitter:description":
              "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
            "og:locale": "en_US",
            "og:url": "http://www.spacex.com",
          },
        ],
        cse_image: [
          {
            src: "https://www.spacex.com/static/images/share.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Tesla: Electric Cars, Solar & Clean Energy",
      htmlTitle: "Tesla: Electric Cars, Solar &amp; Clean Energy",
      link: "https://www.tesla.com/",
      displayLink: "www.tesla.com",
      snippet:
        "Tesla is accelerating the world's transition to sustainable energy with electric cars\n, solar and integrated renewable energy solutions for homes and businesses.",
      htmlSnippet:
        "Tesla is accelerating the world&#39;s transition to sustainable energy with electric cars\u003cbr\u003e\n, solar and integrated renewable energy solutions for homes and businesses.",
      cacheId: "rHYp-0etoiEJ",
      formattedUrl: "https://www.tesla.com/",
      htmlFormattedUrl: "https://www.tesla.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLwcVTUuHf_VXGFHZNRLAiU19-PuPsuWtM6Gcl5DYeYyD3DrhtMgd688Q",
            width: "311",
            height: "162",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#cc0000",
            "og:image":
              "https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",
            "twitter:card": "summary_large_image",
            "twitter:title": "Electric Cars, Solar & Clean Energy | Tesla",
            "og:type": "website",
            "theme-color": "#000000",
            "og:site_name": "Tesla",
            "og:image:url":
              "https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",
            handheldfriendly: "true",
            "twitter:url": "https://www.tesla.com/",
            "og:title": "Electric Cars, Solar & Clean Energy | Tesla",
            "msapplication-tileimage":
              "/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png",
            "twitter:creator": "@tesla",
            "og:description":
              "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
            "twitter:image":
              "https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",
            "og:image:secure_url":
              "https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",
            "twitter:site": "@tesla",
            "apple-mobile-web-app-status-bar-style": "black",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
            "apple-mobile-web-app-capable": "yes",
            mobileoptimized: "width",
            "og:url": "https://www.tesla.com/",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ...",
      htmlTitle:
        "\u003cb\u003eElon Musk\u003c/b\u003e: Tesla, SpaceX, and the Quest for a Fantastic Future ...",
      link:
        "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/006230125X",
      displayLink: "www.amazon.com",
      snippet:
        "Elon Musk paints a portrait of a complex man who has renewed American \nindustry and sparked new levels of innovation—from PayPal to Tesla, SpaceX, \nand ...",
      htmlSnippet:
        "\u003cb\u003eElon Musk\u003c/b\u003e paints a portrait of a complex man who has renewed American \u003cbr\u003e\nindustry and sparked new levels of innovation—from PayPal to Tesla, SpaceX, \u003cbr\u003e\nand&nbsp;...",
      cacheId: "gE_faV9X098J",
      formattedUrl:
        "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic.../006230125X",
      htmlFormattedUrl:
        "https://www.amazon.com/\u003cb\u003eElon\u003c/b\u003e-\u003cb\u003eMusk\u003c/b\u003e-SpaceX-Fantastic.../006230125X",
      pagemap: {
        scraped: [
          {
            image_link:
              "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfZqrpvI8zSvI6msHgWu1futveHCOB7WGuTEpZPxKPp_VuqOdmDw-JGQML",
            width: "183",
            height: "275",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SR600%2c315_PIWhiteStrip%2cBottomLeft%2c0%2c35_PIStarRatingFOURANDHALF%2cBottomLeft%2c360%2c-6_SR600%2c315_ZA(7691%20Reviews)%2c445%2c291%2c400%2c400%2carial%2c12%2c4%2c0%2c0%2c5_SCLZZZZZZZ_.jpg",
            "og:title":
              "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
            "og:url": "https://www.amazon.com/dp/006230125X/ref=tsm_1_fb_lk",
            title:
              "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future: Vance, Ashlee: 9780062301253: Amazon.com: Books",
            "og:description":
              "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
          },
        ],
        cse_image: [
          {
            src:
              "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Elon Musk | Tesla",
      htmlTitle: "\u003cb\u003eElon Musk\u003c/b\u003e | Tesla",
      link: "https://www.tesla.com/elon-musk",
      displayLink: "www.tesla.com",
      snippet:
        "Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring \nCompany.",
      htmlSnippet:
        "\u003cb\u003eElon Musk\u003c/b\u003e co-founded and leads Tesla, SpaceX, Neuralink and The Boring \u003cbr\u003e\nCompany.",
      cacheId: "tq8vfrgZKs4J",
      formattedUrl: "https://www.tesla.com/elon-musk",
      htmlFormattedUrl:
        "https://www.tesla.com/\u003cb\u003eelon\u003c/b\u003e-\u003cb\u003emusk\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKupztKB-LRW62ROE5dj76wzb2g7iJ04eTJSOLQ529C0ePsAAnedbRzRw",
            width: "259",
            height: "194",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#cc0000",
            "og:image":
              "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
            "twitter:card": "summary_large_image",
            "twitter:title": "Elon Musk",
            "twitter:site:id": "13298072",
            "og:image:url":
              "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
            "msapplication-tileimage":
              "/sites/all/themes/custom/tesla_theme/assets/img/icons/mstile-144x144.png?2",
            "twitter:creator": "@teslamotors",
            "og:image:secure_url":
              "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
            "twitter:image":
              "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
            "twitter:site": "@teslamotors",
            "twitter:creator:id": "13298072",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company.",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Joe Rogan Experience #1169 - Elon Musk - YouTube",
      htmlTitle:
        "Joe Rogan Experience #1169 - \u003cb\u003eElon Musk\u003c/b\u003e - YouTube",
      link: "https://www.youtube.com/watch?v=ycPr5-27vSI",
      displayLink: "www.youtube.com",
      snippet:
        "Sep 7, 2018 ... Elon Musk is a business magnet, investor and engineer. Show less Show more. \nTranscript. Live chat replay was turned off for this video.",
      htmlSnippet:
        "Sep 7, 2018 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eElon Musk\u003c/b\u003e is a business magnet, investor and engineer. Show less Show more. \u003cbr\u003e\nTranscript. Live chat replay was turned off for this video.",
      formattedUrl: "https://www.youtube.com/watch?v=ycPr5-27vSI",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=ycPr5-27vSI",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAflm1eSMyF8EBnsABnqpghDWvvwSGtgx0cSuhvtzNHeMX0OgV2_37syQ",
            width: "259",
            height: "194",
          },
        ],
        imageobject: [
          {
            width: "480",
            url: "https://i.ytimg.com/vi/ycPr5-27vSI/hqdefault.jpg",
            height: "360",
          },
        ],
        broadcastevent: [
          {
            islivebroadcast: "True",
            enddate: "2018-09-07T07:09:37+00:00",
            startdate: "2018-09-07T04:32:37+00:00",
          },
        ],
        person: [
          {
            name: "PowerfulJRE",
            url: "http://www.youtube.com/user/PowerfulJRE",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/ycPr5-27vSI/hqdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=ycPr5-27vSI&feature=applinks",
            "og:image:width": "480",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=ycPr5-27vSI",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=ycPr5-27vSI&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            title: "Joe Rogan Experience #1169 - Elon Musk",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=ycPr5-27vSI&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "Elon Musk is a business magnet, investor and engineer.",
            "al:ios:app_store_id": "544007664",
            "twitter:image": "https://i.ytimg.com/vi/ycPr5-27vSI/hqdefault.jpg",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/ycPr5-27vSI",
            "og:type": "video.other",
            "twitter:title": "Joe Rogan Experience #1169 - Elon Musk",
            "al:ios:app_name": "YouTube",
            "og:title": "Joe Rogan Experience #1169 - Elon Musk",
            "og:image:height": "360",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/watch?v=ycPr5-27vSI&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/ycPr5-27vSI",
            "og:video:tag": "Joe Rogan Experience",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=ycPr5-27vSI&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "Elon Musk is a business magnet, investor and engineer.",
            "og:url": "https://www.youtube.com/watch?v=ycPr5-27vSI",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/ycPr5-27vSI",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2018-09-07",
            description:
              "Elon Musk is a business magnet, investor and engineer.",
            videoid: "ycPr5-27vSI",
            url: "https://www.youtube.com/watch?v=ycPr5-27vSI",
            duration: "PT157M3S",
            unlisted: "False",
            name: "Joe Rogan Experience #1169 - Elon Musk",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "People & Blogs",
            interactioncount: "37227115",
            channelid: "UCzQUP1qoWDoEbmsQxvdjxgQ",
            datepublished: "2018-09-07",
            thumbnailurl: "https://i.ytimg.com/vi/ycPr5-27vSI/hqdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/ycPr5-27vSI/hqdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Elon Musk - Children, Tesla & Girlfriend - Biography",
      htmlTitle:
        "\u003cb\u003eElon Musk\u003c/b\u003e - Children, Tesla &amp; Girlfriend - Biography",
      link: "https://www.biography.com/business-figure/elon-musk",
      displayLink: "www.biography.com",
      snippet:
        "2 days ago ... Elon Musk is a South African-born American entrepreneur and businessman who \nfounded X.com in 1999 (which later became PayPal), ...",
      htmlSnippet:
        "2 days ago \u003cb\u003e...\u003c/b\u003e \u003cb\u003eElon Musk\u003c/b\u003e is a South African-born American entrepreneur and businessman who \u003cbr\u003e\nfounded X.com in 1999 (which later became PayPal),&nbsp;...",
      cacheId: "h24P-DAcCzYJ",
      formattedUrl: "https://www.biography.com/business-figure/elon-musk",
      htmlFormattedUrl:
        "https://www.biography.com/business-figure/\u003cb\u003eelon\u003c/b\u003e-\u003cb\u003emusk\u003c/b\u003e",
      pagemap: {
        hcard: [
          {
            bday: "1971-06-28",
            fn: "Elon Musk",
            photo:
              "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlvzoWkkx1iDF-o_yaYkp79sEcYOQD2tOAIn2J6sAXFQi_vPhImaJT_v2P",
            width: "225",
            height: "225",
          },
        ],
        imageobject: [
          {
            contenturl:
              "https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjQxMDgwMzMz/tech-giants-6-raw.jpg",
            author: "Photo: Dan Tuffs/Getty Images",
            caption:
              "Elon Musk poses for a portrait in Los Angeles, California, on July 25, 2008.",
            url:
              "https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjQxMDgwMzMz/tech-giants-6-raw.jpg",
          },
          {
            contenturl:
              "https://www.biography.com/.image/t_share/MTY2MzU3ODI4NjExNjE0Mzgy/elonmusk_facts_desktop.jpg",
            url:
              "https://www.biography.com/.image/t_share/MTY2MzU3ODI4NjExNjE0Mzgy/elonmusk_facts_desktop.jpg",
          },
          {
            contenturl:
              "https://www.biography.com/.image/t_share/MTY2MzU3ODcyNjM1MDI5MTY2/spacex_ceo_elon_musk_visits_nnc_and_afspc_190416-f-zz999-006_cropped.jpg",
            author:
              "Photo: NORAD and USNORTHCOM Public Affairs [Public domain]",
            caption:
              "Elon Musk explains the future capabilities of his company’s “Starship” to senior leaders of the North American Aerospace Defense Command, U.S. Northern Command and Air Force Space Command...",
            url:
              "https://www.biography.com/.image/t_share/MTY2MzU3ODcyNjM1MDI5MTY2/spacex_ceo_elon_musk_visits_nnc_and_afspc_190416-f-zz999-006_cropped.jpg",
          },
        ],
        person: [
          {
            image:
              "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            birthdate: "June 28, 1971 (age 49)",
            name: "Elon Musk",
            alumniof:
              "University of Pennsylania, Stanford University, Queen's University, Ontario",
            description:
              "South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.",
            additionalname: "Elon Reeve Musk",
            headline: "Elon Musk Biography",
          },
        ],
        metatags: [
          {
            pagetype: "person",
            "og:image":
              "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            "twitter:card": "summary_large_image",
            "og:site_name": "Biography",
            "twitter:url":
              "https://www.biography.com/business-figure/elon-musk",
            "apple-mobile-web-app-title": "Biography",
            section: "Business Figures",
            "phx:content-item-id": "ci01a8bfd621ee860b",
            "og:description":
              "South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.",
            "twitter:image":
              "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            "dcterms.rightsholder":
              "Biography and the Biography logo are registered trademarks of A&E Television Networks, LLC.",
            "phx:content-object-type": "ContentPerson",
            "twitter:site": "@bio",
            "parsely-link":
              "https://www.biography.com/business-figure/elon-musk",
            "sailthru.title": "Elon Musk",
            "parsely-image-url":
              "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            modified: "2020-09-17T15:10:15Z",
            "parsely-section": "Business Figures",
            "dcterms.datecopyrighted": "2020",
            "sailthru.date": "2018-04-04T12:37:01Z",
            "og:type": "website",
            handheldfriendly: "True",
            "twitter:domain": "www.biography.com",
            "parsely-post-id": "ci01a8bfd621ee860b",
            "msvalidate.01": "565AA37CB662E60BF24DDCABEC686D8F",
            "og:title": "Elon Musk",
            pinterest: "nohover",
            published: "2018-04-04T12:37:01Z",
            "fb:pages": "123492867697144",
            "parsely-title": "Elon Musk - Biography",
            "parsely-pub-date": "2018-04-04T12:37:01Z",
            referrer: "unsafe-url",
            "pinterest-rich-pin": "true",
            "fb:app_id": "104784826244596",
            "parsely-tags":
              "Nikola Tesla,Henry Ford,Thomas Edison,Steve Jobs,Bill Gates",
            "sailthru.description":
              "South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.",
            "apple-mobile-web-app-status-bar-style": "black",
            "item-id": "ci01a8bfd621ee860b",
            viewport: "width=device-width, initial-scale=1",
            "apple-mobile-web-app-capable": "no",
            "twitter:description":
              "South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.",
            mobileoptimized: "320",
            "og:url": "https://www.biography.com/business-figure/elon-musk",
            "sailthru.image.full":
              "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            "format-detection": "telephone=no",
          },
        ],
        videoobject: [
          {
            duration: "PT2M34S",
            image:
              "https://www.biography.com/.image/t_share/MTUxMzAzOTA4MTA5NTkxNzQ0/biography-elon-musk.jpg",
            uploaddate: "2017-11-10T17:46:09Z",
            name: "Biography: Elon Musk",
            description:
              "Naomi Ekperigin shares some little-known facts about Elon Musk.",
            thumbnailurl:
              "https://www.biography.com/.image/t_share/MTUxMzAzOTA4MTA5NTkxNzQ0/biography-elon-musk.jpg",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "@elonmusk • Instagram photos and videos",
      htmlTitle:
        "@\u003cb\u003eelonmusk\u003c/b\u003e • Instagram photos and videos",
      link: "https://www.instagram.com/elonmusk/",
      displayLink: "www.instagram.com",
      snippet:
        "163.6k Followers, 2 Following, 165 Posts - See Instagram photos and videos \nfrom @elonmusk.",
      htmlSnippet:
        "163.6k Followers, 2 Following, 165 Posts - See Instagram photos and videos \u003cbr\u003e\nfrom @\u003cb\u003eelonmusk\u003c/b\u003e.",
      formattedUrl: "https://www.instagram.com/elonmusk/",
      htmlFormattedUrl:
        "https://www.instagram.com/\u003cb\u003eelonmusk\u003c/b\u003e/",
      pagemap: {
        xfn: [{}],
        metatags: [
          {
            "og:image":
              "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/66856406_428564481080089_1662075382033022976_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=CAq3EywMcIYAX9dMFhO&oh=4739f48b3a5439651a360fe9583427a3&oe=5F8E7E2D",
            "theme-color": "#ffffff",
            "og:type": "profile",
            "al:ios:app_name": "Instagram",
            "al:android:package": "com.instagram.android",
            "al:ios:url": "instagram://user?username=elonmusk",
            "og:description":
              "163.6k Followers, 2 Following, 165 Posts - See Instagram photos and videos from @elonmusk",
            "al:ios:app_store_id": "389801252",
            "al:android:url": "https://www.instagram.com/_u/elonmusk/",
            "apple-mobile-web-app-status-bar-style": "default",
            viewport:
              "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
            "mobile-web-app-capable": "yes",
            "og:url": "https://www.instagram.com/elonmusk/",
            "al:android:app_name": "Instagram",
          },
        ],
        cse_image: [
          {
            src:
              "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/66856406_428564481080089_1662075382033022976_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=CAq3EywMcIYAX9dMFhO&oh=4739f48b3a5439651a360fe9583427a3&oe=5F8E7E2D",
          },
        ],
      },
    },
  ],
};
