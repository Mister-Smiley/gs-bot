const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      CONFIG: {
        name: "config",
        aliases: ["config"],
        description: "Config of the serveur",
        args: true,
        usage: "<key> <value>",
        category: "admin",
        cooldown: 5,
        pem: ["ADMINISTRATOR"]
      }
    },
    CLIENT: {
      CREDIT: {
        name: "credit",
        aliases: ["credit"],
        description: "Bot information",
        args: false,
        usage: "",
        category: "client",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      INFO: {
        name: "info",
        aliases: ["info", "i"],
        description: "Bot information",
        args: true,
        usage: "<host | owner | all>",
        category: "client",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      PING: {
        name: "ping",
        aliases: ["ping"],
        description: "Ping the bot and the discord API",
        args: false,
        usage: "",
        category: "client",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      UPTIME: {
        name: "uptime",
        aliases: ["uptime", "up", "utime", "upt"],
        description: "See how long the bot has been online",
        args: false,
        usage: "",
        category: "client",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      }
    },
    IMAGE: {
      WASTED: {
        name: "wasted",
        aliases: ["wasted"],
        description: "Am I a joke ?",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      RED: {
        name: "red",
        aliases: ["red"],
        description: "Am I a joke ?",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      JOKE: {
        name: "joke",
        aliases: ["joke", "amiajoke"],
        description: "Am I a joke ?",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      PDP: {
        name: "avatar",
        aliases: ["avatar", "pp", "pdp"],
        description: "Send user profile picture",
        args: false,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      BAD: {
        name: "bad",
        aliases: ["bad"],
        description: "You are a bad person",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      FLOOR: {
        name: "floor",
        aliases: ["floor"],
        description: "The floor is ...",
        args: true,
        usage: "<user> <text>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      PORNHUB: {
        name: "pornhub",
        aliases: ["pornhub"],
        description: "Create a pornhub logo",
        args: true,
        usage: "<part_1> <part_2>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      SALTY: {
        name: "salty",
        aliases: ["salty"],
        description: "You are a very salty person",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      SUPREME: {
        name: "suprem",
        aliases: ["suprem"],
        description: "Create a suprem logo",
        args: true,
        usage: "<text>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      WOOSH: {
        name: "woosh",
        aliases: ["woosh"],
        description: "Woosh",
        args: true,
        usage: "<user>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      ANIMALS: {
        name: "animals",
        aliases: ["animals"],
        description: "Random Image of animals",
        args: true,
        usage: "<anmial name>",
        category: "image",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      }
    },
    MISC: {
      BALL: {
        name: "8ball",
        aliases: ["8ball"],
        description: "tic tac tic tac BOOM!",
        args: false,
        usage: "",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      TIC: {
        name: "tic",
        aliases: ["tic", "tac", "boom"],
        description: "tic tac tic tac BOOM!",
        args: false,
        usage: "",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      ALIASES: {
        name: "alias",
        aliases: ["alias", "aliases"],
        description: "show all command aliases",
        args: true,
        usage: "<command>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      COLOR: {
        name: "colorshearsh",
        aliases: ["colorshearsh", "color"],
        description: "Shearch for a color using the hex code",
        args: true,
        usage: "<hex_code>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      HELP: {
        name: "help",
        aliases: ["help", "h"],
        description: "Help",
        args: false,
        usage: "<command>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      INFOSERV: {
        name: "infoserv",
        aliases: ["infoserv", "serv", "serveur", "iserv", "si", "serverinfo"],
        description: "Display all serveur information",
        args: false,
        usage: "",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      INFOUSER: {
        name: "infouser",
        aliases: ["infouser", "user", "iuser", "ui"],
        description: "Discplay all user information",
        args: false,
        usage: "<user>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      QRCODE: {
        name: "qrcode",
        aliases: ["qrcode", "qr"],
        description: "Créate a qrcode from a link",
        args: true,
        usage: "<url>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      SAY: {
        name: "say",
        aliases: ["say"],
        description: "The bot send the message you want",
        args: true,
        usage: "<message",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      SHORTEN: {
        name: "shorten",
        aliases: ["shorten", "short", "shorturl"],
        description: "Shorten an url using is.gd",
        args: true,
        usage: "<url>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      TIMER: {
        name: "timer",
        aliases: ["timer", "time"],
        description: "Créate a timer",
        args: true,
        usage: "<time in s|m|h>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      ASCII: {
        name: "ascii",
        aliases: ["ascii"],
        description: "Converts text info ASCI",
        args: true,
        usage: "<message to converts>",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      TEST: {
        name: "test",
        aliases: ["test"],
        description: "test",
        args: false,
        usage: "",
        category: "misc",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      }
    },
    XP: {
      LEVEL: {
        name: "level",
        aliases: ["level", "xp", "rank"],
        description: "Show your xp level",
        args: false,
        usage: "(<user>)",
        category: "Xp",
        cooldown: 5,
        perm: ["SEND_MESSAGE"]
      },
    },
    MODERATION: {
      ADDROLE: {
        name: "addrole",
        aliases: ["addrole"],
        description: "Delete the number of message you have defined",
        args: true,
        usage: "<user> <role>",
        category: "moderation",
        cooldown: 5,
        perm: ["MANAGE_MESSAGES"]
      },
      CLEAR: {
        name: "clear",
        aliases: ["clear", "purge"],
        description: "Delete the number of message you have defined",
        args: false,
        usage: "<user>",
        category: "moderation",
        cooldown: 5,
        perm: ["MANAGE_MESSAGES"]
      },
      POLL: {
        name: "poll",
        aliases: ["poll"],
        description: "Create a poll",
        args: true,
        usage: "<question>",
        category: "moderation",
        cooldown: 5,
        perm: ["MANAGE_MESSAGES"]
      },
      BAN: {
        name: "ban",
        aliases: ["ban"],
        description: "ban a user",
        args: true,
        usage: "<user> <reason>",
        category: "moderation",
        cooldown: 5,
        perm: ["BAN_MEMBERS"]
      },
      LOCKDOWN: {
        name: "lockdown",
        aliases: ["lockdown", "lock", "ldown", "lockd", "channellock", "lockchan", "chanlock"],
        description: "Lock the channel in which the command is executed",
        args: false,
        usage: "<reason>",
        category: "moderation",
        cooldown: 25,
        perm: ["MANAGE_CHANNELS"]
      },
      UNLOCKDOWN: {
        name: "unlockdown",
        aliases: ["unlockdown", "unlock", "unld", "uld", "channelunlock", "unlockchan"],
        description: "unlock the channel in which the command is executed",
        args: false,
        usage: "<reason>",
        category: "moderation",
        cooldown: 25,
        perm: ["MANAGE_CHANNELS"]
      },
      TEMPSLOCKDOWN: {
        name: "tempslockdown",
        aliases: ["tempslockdown", "templock", "tempsld", "tld", "tempchannellock", "timedown", "tlock", "timelock"],
        description: "lock the channel for a specified period",
        args: true,
        usage: "<time>",
        category: "moderation",
        cooldown: 25,
        perm: ["MANAGE_CHANNELS"]
      },
      TEMPSMUTE: {
        name: "tempmute",
        aliases: ["tmute", "tempmute", "mutetime", "timemute", "tm"],
        description: "Mute somone for a specified period",
        args: true,
        usage: "<user> <time>",
        category: "moderation",
        cooldown: 5,

      },
      MUTE: {
        name: "mute",
        aliases: ["mute", "m"],
        description: "Mute somone",
        args: true,
        usage: "<user>",
        category: "moderation",
        cooldown: 5,
        perm: ["MANAGE_MESSAGES"]
      },
      UNMUTE: {
        name: "unmute",
        aliases: ["mute", "um"],
        description: "UnMute somone",
        args: true,
        usage: "<user>",
        category: "moderation",
        cooldown: 5,
        perm: ["MANAGE_MESSAGES"]
      },
      UNBAN: {
        name: "unban",
        aliases: ["unban", "uban"],
        description: "Unban somone",
        args: true,
        usage: "<user>",
        category: "moderation",
        cooldown: 5,
        perm: ["BAN_MEMBERS"]
      },
      KICK: {
        name: "kick",
        aliases: ["kick"],
        description: "kick somone",
        args: true,
        usage: "<user> (<reason>)",
        category: "moderation",
        cooldown: 5,
        perm: ["KICK_MEMBERS"]
      }
    },
    OWNER: {
      EVAL: {
        name: "eval",
        aliases: ["eval"],
        description: "eval the code",
        args: true,
        usage: "<code>",
        category: "owner",
        cooldown: 5,
        perm: ["OWNER"]
      },
      ADDEXP: {
        name: "addexperience",
        aliases: ["addexperience", "addxp"],
        description: "Add xp to someone",
        args: true,
        usage: "(<xp_to_add>)",
        category: "owner",
        cooldown: 5,
        perm: ["ADMINISTRATOR"]
      },
      REMOVEEXP: {
        name: "removeexperience",
        aliases: ["removeexperience", "removexp", "remxp"],
        description: "Add xp to someone",
        args: true,
        usage: "<user> <xp_to_add>",
        category: "owner",
        cooldown: 5,
        perm: ["ADMINISTRATOR"]
      }
    },
    NSFW: {
      ANAL: {
        name: "anal",
        aliases: ["nanal"],
        description: "Hentail Anal",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      BJ: {
        name: "bj",
        aliases: ["bj"],
        description: "bj",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      BLOWJOB: {
        name: "blowjob",
        aliases: ["blowjob"],
        description: "bj",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      CLASIC: {
        name: "classic",
        aliases: ["classic"],
        description: "classic fuck",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      CUM: {
        name: "cum",
        aliases: ["cum"],
        description: "cum",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      CUMART: {
        name: "cumart",
        aliases: ["cumart"],
        description: "cumart",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      DANBOORU: {
        name: "danbooru",
        aliases: ["danbooru", "booru"],
        description: "Searches danbooru image board",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      ERO: {
        name: "ero",
        aliases: ["ero"],
        description: "shearch ero image",
        args: false,
        usage: "<feet | neko | yuri>",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      XBOORU: {
        name: "xbooru",
        aliases: ["xbooru"],
        description: "booru x",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      TITS: {
        name: "tits",
        aliases: ["tits"],
        description: "Beautiful tits images",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      },
      D3: {
        name: "3d",
        aliases: ["3d"],
        description: "3d",
        args: false,
        usage: "",
        category: "nsfw",
        cooldown: 0,
        perm: ["SEND_MESSAGES"]
      }
    },
    SOCIAL: {
      FACEPALM: {
        name: "facepalm",
        aliases: ["facepalm"],
        description: "facepalm 🤦‍♂️",
        args: false,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      ANIME: {
        name: "anime",
        aliases: ["anime", "manga"],
        description: "do a hug to somone",
        args: true,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      HUG: {
        name: "hug",
        aliases: ["hug"],
        description: "do a hug to somone",
        args: true,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      PAT: {
        name: "pat",
        aliases: ["pat"],
        description: "do a pat to somone",
        args: true,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      PIKA: {
        name: "pika",
        aliases: ["pika"],
        description: "Pika pika tchuuuuu",
        args: false,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      KISS: {
        name: "kiss",
        aliases: ["kiss"],
        description: "kiss somone",
        args: true,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
      SMUG: {
        name: "smug",
        aliases: ["smug"],
        description: "",
        args: false,
        usage: "",
        category: "social",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      },
    },
    RPG: {
      SETUP: {
        name: "setup",
        aliases: ["setup"],
        description: "setup your profile",
        args: false,
        usage: "<classe>",
        category: "rpg",
        cooldown: 1,
        perm: ["SEND_MESSAGES"]
      },
      PROFILE: {
        name: "profile",
        aliases: ["profile"],
        description: "show your profile",
        args: false,
        usage: "<classe>",
        category: "rpg",
        cooldown: 5,
        perm: ["SEND_MESSAGES"]
      }
    },
    FOOD: {
      APPLE: {
        name: "apple"
      }
    }
  }
};

exports.MESSAGES = MESSAGES;
