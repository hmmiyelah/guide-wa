import { NativeModules } from 'react-native'

global.mainColor = '#1b2229'
global.PROTOCOL = 'http'
//global.HOST = "dnsoft.loca.lt";
global.HOST = '192.168.43.182'
global.API_URL = PROTOCOL + '://' + HOST + '/pubg'
global.USERDATA_URL = PROTOCOL + '://' + HOST + '/pubg/userdata/'
global.CONTENTS = {
  newbie: [
    {
      name: 'Intro',
      description: 'Cara Install 2 Akun Whatsapp',
      image: 'image1',
      contents: [
        {
          content:
            'Ternyata cara install atau membuka 2 akun WhatsApp dalam 1 HP Android tanpa perlu root sangatlah mudah, untuk bisa menjalankan dua WhatsApp di satu hp bisa dilakukan tanpa aplikasi tambahan.\n\nBukan hanya dua tetapi di HP Samsung bisa install 3 WhatsApp sekaligus dengan catatan sudah memiliki fitur dual messenger sehingga bisa menggandakan aplikasi WhatsApp dengan mudah dan aman.',
          image: 'image1',
        },
        {
          content:
            'Sedangkan bagi pengguna HP Android yang tidak memiliki fitur dual messenger maka bisa memanfaatkan aplikasi WhatsApp bisnis atau bisa juga menggunakan aplikasi parallel space dan lainnya.\n\nMeskipun memang tidak selamanya aplikasi parallel space ini bisa berjalan dengan baik, kadang di beberapa tipe HP malah tidak bisa digunakan. Namun demikian bagi yang ingin tahu cara membuat 2 WhatsApp di 1 HP Android tanpa perlu root silahkan lihat beberapa opsi berikut ini.',
          image: 'image1',
        },
        {
          content:
            'Kami berusaha untuk terus update artikel ini karena beberapa aplikasi untuk clone WhatsApp sudah tidak bisa digunakan atau malah hilang dari Google Play Store salah satunya adalah MoChat.\n\nMungkin ada berbagai alasan kenapa ingin membuka 2 akun WhatsApp di HP Android, diantaranya agar bisa pisahkan akun pribadi dengan akun bisnis atau mungkin pemilik toko online yang ingin memisahkan nomor untuk chat pribadi dan chat dengan pembeli.',
          image: 'image1',
        },
        {
          content:
            'Catatan : Kami tidak bertanggung jawab dengan segala akibat yang timbul setelah mengikuti panduan pada artikel ini, namun bila ingin aman dan WhatsApp bisa berjalan lebih dari 2 akun maka sebaiknya gunakan aplikasi WhatsApp business atau fitur dual messenger di HP Samsung.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Membuka Akun Kedua',
      description: 'Dengan WhatsApp Bisnis',
      image: 'image1',
      contents: [
        {
          content:
            'Ini adalah cara paling aman, karena aplikasinya resmi dibuat oleh WhatsApp, meskipun ada embel-embel bisnis tetapi bisa digunakan juga oleh akun pribadi dan bagi yang ingin buka 2 WA di satu HP maka caranya adalah sebagai berikut:',
          image: 'image1',
        },
        {
          content:
            '1. Install aplikasi WhatsApp bussiness dari Google Play Store.\n\n2. Kemudian jalankan lalu daftar menggunakan nomor HP yang baru.\n\n3.Setelah akun kedua berhasil dibuat, nanti bisa berjalan bersamaan dengan akun utama dan untuk mengakses atau membukanya dari halaman home screen pilih WhatsApp Business.\n\n4.Apabila akun berhasil dibuat maka nanti akan bisa digunakan bersamaan dengan WhatsApp biasa dengan normal.',
          image: 'image1',
        },
        {
          content:
            'Apakah apk WhatsApp business bisa dipakai untuk akun biasa? Bisa, meskipun memang untuk WA bisnis ada beberapa fitur yang tidak dimiliki oleh WhatsApp biasa seperti bisa untuk membuat katalog produk dan lain sebagainya.\n\nPerbedaan lainnya adalah jika kamu menggunakan aplikasi ini maka saat orang lain lihat profil WhatsApp kamu, akan terlihat akun yang dipakai adalah akun bisnis.',
          image: 'image1',
        },
        {
          content:
            'Namun untuk fungsi dasar seperti mengirim pesan, video call, mengirim dokumen, mengatur privasi termasuk menghilangkan centang biru, memblokir kontak WhatsApp dan sebagainya sama saja seperti WA biasa.\n\nTidak hanya itu setelah membuat akun WhatsApp bisnis kamu juga bisa membuka dari laptop atau PC menggunakan WhatsApp web maupun aplikasi WhatsApp for PC.\n\nJadi pada dasarnya sama saja dengan aplikasi WhatsApp biasa kalau dilihat dari fitur umum.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Membuka 2 Akun WhatsApp',
      description: 'Menggunakan Aplikasi Parallel Space',
      image: 'image1',
      contents: [
        {
          content:
            'Update November 2022, aplikasi Parallel Space masih bisa digunakan untuk menjalankan dua nomor WhatsApp pada satu HP Android, namun ada yang berbeda yaitu harus install 2 aplikasi dan sudah tidak membuat pintasan atau shortcut icon WA kedua kecuali upgrade ke PRO.\n\n1. Install aplikasi Parallel Space dari Google Play Store.\n2. Jalankan lalu ikuti saja petunjuk yang muncul di layar HP.\n3. Setelah aplikasi terbuka pastikan aplikasi WhatsApp dicentang lalu pilih Tambahkan ke parallel Space.\n\n4. Apabila diminta untuk install Parallel Space 64 bit ikuti saja karena tanpa aplikasi tambahan proses klon tidak akan berjalan.\n\n5. Untuk menambahkan akun WhatsApp lain, tap icon WhatsApp (lihat gambar diatas – kanan) kemudian silahkan buat akun WhatsApp dengan nomor HP baru sampai selesai.\n6.Setelah pendaftaran WA berhasil kemudian kita bisa langsung gunakan dan bisa pakai 2 WhatsApp dalam 1 HP secara bergantian tanpa perlu menghapus akun WhatsApp lama terlebih dahulu.',
          image: 'image1',
        },
        {
          content:
            'Namun berdasarkan percobaan pada November 2020, app ini masih bisa dipakai dengan lancar, artinya bisa dipakai untuk mengirim dan menerima pesan WhatsApp dengan normal termasuk notifikasi ketika ada pesan masuk tetap muncul di status bar HP.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Bagaimana cara menghapus',
      description: 'aplikasi WhatsApp di Parallel Space?',
      image: 'image1',
      contents: [
        {
          content:
            'Info, bila hanya ingin hapus aplikasi WhatsApp kedua tapi akun atau nomornya ingin tetap aktif maka kamu cukup hapus WhatsApp dari parallel space.\n\nTetapi jika ingin menonaktifkan nomor WhatsApp maka kamu harus hapus akun WhatsApp terlebih dahulu kemudian setelah itu baru hapus dari parallel space, dan cara untuk menghapusnya adalah sebagai berikut:',
          image: 'image1',
        },
        {
          content:
            '1.Buka Parallel Space.\n\n2. Tap dan tahan pada ikon WhatsApp lalu geser ke ikon hapus (tong sampah).\n\n3. Terakhir pilih Hapus.',
          image: 'image1',
        },
        {
          content:
            'Jika parallel space dihapus apakah WhatsApp ikut terhapus? Ya, untuk aplikasi yang digandakan menggunakan parallel space akan terhapus semua.\n\nTetapi untuk aplikasi WhatsApp asli yang tidak digandakan akan tetap ada atau tidak ikut terhapus.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Instal Dua WhatsApp',
      description: 'Dengan Dual Messenger di HP Samsung',
      image: 'image1',
      contents: [
        {
          content:
            'Bagi pemilik HP Android Samsung terbaru seperti J7 PRO, A30s, J6 dan lainnya yang sudah memiliki fitur dua messenger maka untuk menginstall dua aplikasi WhatsApp dalam satu HP jauh lebih mudah.\n\nCukup aktifkan dual messenger kemudian bisa buka WhatsApp menggunakan dua nomor berbeda, bahkan bisa 3 jika ditambah WhatsApp bisnis.',
          image: 'image1',
        },
        {
          content:
            'Adapun cara mengaktifkan dual messenger agar bisa membuka 2 akun WhatsApp dalam 1 HP Android caranya adalah sebagai berikut:\n\n1. Buka menu pengaturan HP lalu pilih Fitur Lanjutan.\n\n2. Scroll kebawah lalu pilih Dual Messenger.\n\n3. Geser ke kanan pada WhatsApp lalu akan muncul pertanyaan “Instal salinan kedua WhatsApp?” pilih Instal.Kemudian tutup pengaturan dan buka home screen, cari icon WhatsApp kedua.\n\n4. Untuk membuat akun WA kedua, tap pada ikon tersebut lalu silahkan buat akun baru mengunakan nomor HP lain dan ikuti langkahnya sampai selesai.',
          image: 'image1',
        },
        {
          content:
            'Kelebihan fitur dual messenger adalah, kita tidak perlu pasang aplikasi tambahan yang kebanyakan mengandung iklan atau malah lama-lama tidak berfungsi. Selain itu tentu saja lebih stabil karena ini fitur resmi dari pabrikan Samsung.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Bagaimana cara menghapus',
      description: 'WhatsApp dual messenger di HP Samsung',
      image: 'image1',
      contents: [
        {
          content:
            '1. Buka pengaturan lalu pilih Fitur Lanjutan.\n\n2. Pilih Dual Messenger.\n\n3. Geser opsi WhatsApp ke kiri, kemudian akan muncul pertanyaan “Hapus instalasi salinan kedua WhatsApp?” pilih Hapus Instalasi.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Apakah Bisa Instal',
      description: '3 WhatsApp atau Lebih di Satu HP?',
      image: 'image1',
      contents: [
        {
          content:
            'Bisa saja, contohnya menggunakan paralle space lalu install juga WhatsApp Business dan jika kamu pakai HP Samsung yang sudah dilengkapi dual messenger maka bisa pasang aplikasi WhatsApp lainnya melalui fitur tersebut.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Jika install 2 WhatsApp',
      description: 'di HP Android apakah bisa dibuka dari laptop?',
      image: 'image1',
      contents: [
        {
          content:
            'Bisa, menggunakan WhatsApp web atau aplikasi untuk PC namun hanya bisa diakses oleh satu nomor saja secara bergantian tidak bisa buka semua akun sekaligus dalam satu browser.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Apa bisa membuka',
      description: '2 akun WhatsApp di laptop atau PC?',
      image: 'image1',
      contents: [
        {
          content:
            'Bisa, yaitu menggunakan web browser berbeda. Misalnya akun pertama dibuka dari Firefox kemudian akun kedua buka dari Google Chrome.\n\nMaka dalam waktu bersamaan bisa membuka 2 WhatApp web tetapi tentu saja resikonya laptop atau komputer akan semakin berat bebannya karena membuka dua browser berbeda dalam waktu yang sama sering kali membuat PC jadi lemot.',
          image: 'image1',
        },
        {
          content:
            'Tapi kalau memang dibutuhkan silahkan saja dicoba, dan ini sudah kami praktekan sebelumnya.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Kenapa tidak ada kontak',
      description: 'pada WhatsApp dual messenger Samsung?',
      image: 'image1',
      contents: [
        {
          content:
            'Bila kamu menemukan kendala kontak berbeda atau malah kontak WhatsApp kosong setelah aktifkan fitur dual messenger maka periksa kembali pengaturan kontak, pastikan tidak mengaktifkan “Gunakan daftar kontak terpisah”.\n\nJika sudah terlanjur maka solusinya disable dulu WhatsApp di dual messenger lalu aktifkan kembali, namun tentu saja harus verifikasi nomor HP lagi seperti awal membuat akun WhatsApp.',
          image: 'image1',
        },
        {
          content:
            'Oleh karena itu sebelum menonaktifkan lalu aktifkan kembali, pastikan nomor HP yang dipakai daftar masih aktif dan bisa menerima SMS, kalau sudah hilang sehingga tidak bisa terima sms verifikasi maka tidak bisa daftar WhatsApp lagi.',
          image: 'image1',
        },
        {
          content:
            'Apakah WhatsApp bisnis bisa digandakan dengan dual messenger? Saat ini tidak bisa, yang bisa hanya aplikasi WhatsApp biasa.',
          image: 'image1',
        },
      ],
    },
    {
      name: 'Kesimpulan',
      description: '',
      image: 'image1',
      contents: [
        {
          content:
            'Dari beberapa aplikasi untuk menggandakan WhatsApp di Android tidak ada yang benar-benar stabil atau bisa berfungsi selamanya.\n\nSeperti yang sudah kami amati sejak pertama kali artikel ini dibuat, sudah lebih dari satu app clone yang tidak bisa digunakan lagi.',
          image: 'image1',
        },
        {
          content:
            'Oleh karena itu yang lebih aman memang menggunakan WhatsApp bisnis atau aktifkan WhatsApp pada menu Dual Messenger Samsung jika ada.\n\nItulah beberapa cara untuk bisa install atau membuka 2 akun WhatsApp dalam 1 hp Android yang sama tanpa perlu root atau menghapus nomor lama, selamat mencoba. Jika anda punya cara lain yang lebih baik silahkan share disini. Terimakasih telah berkunjung.',
          image: 'image1',
        },
      ],
    },
  ],
  advance: [
    {
      name: 'Parachute Method',
      description: 'Use the parachute method',
      image: 'parachute',
      contents: [
        {
          content:
            'To win the early gunfight, you should master this@basic method.\n\nRemember to not landing in a popular@hot-spots where other squads take their drops.\n\nYour@team will be difficult to loot.\n\nSo when you’re 750@meters away from your desired area, drop out from@the ship.\n\nYou will drop faster at the speed of 234 km/h.',
          image: 'parachute_1',
        },
      ],
    },
    {
      name: 'Know Your Land Area',
      description: 'How to know your land area',
      image: 'land_area',
      contents: [
        {
          content:
            'You should know the right location to land.@If you’re with your team, land close to your@ally, so if one person gets knocked out, you@can revive them.\n\nIf you’re a solo player, land@in areas you know have proper and good consistent@loots.\n\nTry the ris like Military Base, Casino, or@School to achieve the most amount of high grade@loots.',
          image: 'land_area_1',
        },
      ],
    },
    {
      name: 'Know Where Vehicles Spawn',
      description: 'How to know where vehicles spawn',
      image: 'vehicle_spawn',
      contents: [
        {
          content:
            'Knowing where the vehicles spawn is important.@PUBG mobile maps are big, unless you play in@an arcade mode, the circle will become smaller@with time.\n\nIn some instances, you are able to@run in a safe area, but you can’t do it if@you’re 2000 meters away.',
          image: 'vehicle_spawn_1',
        },
      ],
    },
    {
      name: 'Perfect Your Setting',
      description: 'How to make your setting perfect',
      image: 'perfect_settings',
      contents: [
        {
          content:
            'To get the best graphic and your game can run@smoothly, perfect your device’s setting.\n\nKeep@your photos or videos in the cloud storage so@you can keep enough space then reduce the memory@usage from the apps.\n\nIf you have played 3-4@games, you should exit out from every app you@have used, restart the device, then open again@PUBG Mobile app.',
          image: 'perfect_settings_1',
        },
      ],
    },
    {
      name: 'Never carry an inventory full of unnecessary items!',
      description: "Don't bring inventory with unnecessary items",
      image: 'inventory',
      contents: [
        {
          content:
            'Bring the necessary item like your suitable@gun for fighting with the opponent in a@certain area.\n\nDon’t make your backpack@full of unnecessary items.\n\nYou should@move quickly after the mission is ended.',
          image: 'inventory_1',
        },
      ],
    },
    {
      name: 'Learn How To Use a Gun',
      description: 'How to better use gun',
      image: 'gun',
      contents: [
        {
          content:
            'As an advanced player, you should learn how@to use all of the weapon.\n\nFeel the dynamic@when you fight.Practice every gun in your early@level and don’t be bothered with your level.\n\nIf@you’re trained well with the weapons, you will@be easier to fight against your opponent.',
          image: 'gun_1',
        },
      ],
    },
    {
      name: 'Learn About Gyroscope',
      description: 'Learn what gyroscope is',
      image: 'gyroscope',
      contents: [
        {
          content:
            'It is very important to learn about gyroscope.@Learn about gyroscope features and master it@to face your opponent smoothly.\n\nUsually you@will need close to a week to master all of@gyroscope features.',
          image: 'gyroscope_1',
        },
      ],
    },
  ],
  pro: [
    {
      name: 'Survival Time',
      description: 'How to better doing survival time',
      image: 'survival_time',
      contents: [
        {
          content:
            'You need to survive until the end of the game@in PUBG.\n\nSurvival time will give the impact@on your ranking point that helps you to reach@the higher tier.\n\nIncrease your survival time@in every game and look at your statistic’s@average time.\n\nKeep it at around 22-25 minutes.',
          image: 'survival_time_1',
        },
      ],
    },
    {
      name: 'Importance of Kills',
      description: 'Learn about importance of kills',
      image: 'importance_of_kills',
      contents: [
        {
          content:
            'To help your push rank, you need to increase your@number of kills because it’s important to increase@your ranking points along with your survival time too.',
          image: 'importance_of_kills_1',
        },
      ],
    },
    {
      name: 'Get Chicken Dinners As Much As Possible',
      description: 'How to get chicken dinners',
      image: 'chicken_dinner',
      contents: [
        {
          content:
            'Chicken dinners are a great way to get more plus@points in PUBG Mobile.\n\nThe key to this game is@to keep your cool and make good decisions to win@the game.\n\nThen, you can get more wins, and move@up the rankings faster from Crown to Ace.',
          image: 'chicken_dinner_1',
        },
      ],
    },
    {
      name: 'Avoid Playing with Random Players',
      description: 'How to avoid playing with random players',
      image: 'random_player',
      contents: [
        {
          content:
            "When you are stuck at Crown level in PUBG Mobile@and want to move up to Ace level, don't play with@random squads.\n\nBecause many players in random squads@may not hear your call, communicating with random@players is very difficult, as they rarely use the@voice chat feature.\n\nBesides that, in most of the@cases you don’t land with these random players.@So, it's better if you play with friends or the@regular squad because you already know their@strengths and weaknesses.",
          image: 'random_player_1',
        },
      ],
    },
    {
      name: 'Health Restored',
      description: 'How to make health restored',
      image: 'health_recover',
      contents: [
        {
          content:
            'Health restored amount will give the key role@to provide you more and point in the game.@Therefore, let’s try to collect more first@aid kits and also health boosters.\n\nYou should@take some zone damages in the first three zones@by staying outside the zone then healing yourself.@If you do that, you will receive health restoration@points on every match’s completion.',
          image: 'health_recover_1',
        },
      ],
    },
  ],
}
global.log = (message) => {
  console.log(message)
}
global.BANNER_AD_ID = 'ca-app-pub-3950402057146083/5883645909'
global.INTERSTITIAL_AD_ID = 'ca-app-pub-3950402057146083/4570564233'
global.NATIVE_AD_ID = 'ca-app-pub-3950402057146083/6173621646'
/* TEST AD ID */
/*global.INTERSTITIAL_AD_ID = "ca-app-pub-3940256099942544/1033173712";
global.BANNER_AD_ID = "ca-app-pub-3940256099942544/6300978111";
global.NATIVE_AD_ID = "ca-app-pub-3940256099942544/2247696110";*/
global.cs_email = 'luckynine.cs@gmail.com'
global.DEVELOPER_HOME =
  'https://play.google.com/store/apps/dev?id=6323058473789380568'
global.PACKAGE_NAME = 'com.dnprod.pubg'
global.readString = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readString(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readInt = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readInt(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readBoolean = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readBoolean(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.writeString = async (name, value) => {
  NativeModules.AndroidUtil.writeString(name, value)
}
global.writeInt = async (name, value) => {
  NativeModules.AndroidUtil.writeInt(name, value)
}
global.writeBoolean = async (name, value) => {
  NativeModules.AndroidUtil.writeBoolean(name, value)
}
global.uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
global.splitByNewline = (str, maxLength) => {
  var buff = ''
  var numOfLines = Math.floor(str.length / maxLength)
  for (var i = 0; i < numOfLines + 1; i++) {
    buff += str.substr(i * maxLength, maxLength)
    if (i !== numOfLines) {
      buff += '@'
    }
  }
  return buff
}
global.string = {
  app_name: 'Guide PUBG',
  text1: 'PC & Mobile',
  text2: 'Get Tips and trick for game play from Newby to Expert.',
  text3: 'PUBG Gaming Tutorial',
  next: 'Next',
  done: 'Done',
  newbie: 'Newbie',
  advance: 'Advance',
  pro: 'Pro',
  expert: 'Expert',
  ad: 'Ad',
  share: 'Share:',
  next: 'Next',
  prev: 'Prev',
  settings: 'Settings',
  notification: 'Notification',
  allow_notifications: 'Allow Notifications',
  help: 'Help',
  how_to_use: 'How To Use',
  contact_us: 'Contact Us',
  about: 'About',
  more_apps: 'More Apps',
  share: 'Share',
  share_apps: 'Share Apps',
  give_5_stars: 'Give 5 Stars',
  how_to_use: 'How To Use',
  about_us: 'About Us',
  share_text:
    'This app is a guide app for playing PUBG game. Get tricks and tips how to win every level in the game, and be a champion over your friends!\n\nThis app includes images that can make your gaming life easier, and the tutorial can be read clearly, so you will win easily without any help from your friends.\n\nShow it to your friends, and make your friends amazed! Try it now,\nDOWNLOAD FOR FREE: http://play.google.com/apps/l9.pubgmobilebattlegroundlite.guidepubgmbesttipstricks',
  newbie_guide: 'Newbie Guide',
  advance_guide: 'Advance Guide',
  pro_guide: 'Pro Guide',
  expert_guide: 'Expert Guide',
}
