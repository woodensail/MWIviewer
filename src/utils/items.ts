const items = [
  [
    "Coin",
    "金币"
  ],
  [
    "Task Token",
    "任务代币"
  ],
  [
    "Chimerical Token",
    "奇幻代币"
  ],
  [
    "Sinister Token",
    "阴森代币"
  ],
  [
    "Enchanted Token",
    "秘法代币"
  ],
  [
    "Cowbell",
    "牛铃"
  ],
  [
    "Bag Of 10 Cowbells",
    "牛铃袋 (10个)"
  ],
  [
    "Purple's Gift",
    "小紫牛的礼物"
  ],
  [
    "Small Meteorite Cache",
    "小陨石舱"
  ],
  [
    "Medium Meteorite Cache",
    "中陨石舱"
  ],
  [
    "Large Meteorite Cache",
    "大陨石舱"
  ],
  [
    "Small Artisan's Crate",
    "小工匠匣"
  ],
  [
    "Medium Artisan's Crate",
    "中工匠匣"
  ],
  [
    "Large Artisan's Crate",
    "大工匠匣"
  ],
  [
    "Small Treasure Chest",
    "小宝箱"
  ],
  [
    "Medium Treasure Chest",
    "中宝箱"
  ],
  [
    "Large Treasure Chest",
    "大宝箱"
  ],
  [
    "Chimerical Chest",
    "奇幻宝箱"
  ],
  [
    "Sinister Chest",
    "阴森宝箱"
  ],
  [
    "Enchanted Chest",
    "秘法宝箱"
  ],
  [
    "Blue Key Fragment",
    "蓝色钥匙碎片"
  ],
  [
    "Green Key Fragment",
    "绿色钥匙碎片"
  ],
  [
    "Purple Key Fragment",
    "紫色钥匙碎片"
  ],
  [
    "White Key Fragment",
    "白色钥匙碎片"
  ],
  [
    "Orange Key Fragment",
    "橙色钥匙碎片"
  ],
  [
    "Brown Key Fragment",
    "棕色钥匙碎片"
  ],
  [
    "Stone Key Fragment",
    "石头钥匙碎片"
  ],
  [
    "Dark Key Fragment",
    "黑暗钥匙碎片"
  ],
  [
    "Burning Key Fragment",
    "燃烧钥匙碎片"
  ],
  [
    "Chimerical Entry Key",
    "奇幻钥匙"
  ],
  [
    "Chimerical Chest Key",
    "奇幻宝箱钥匙"
  ],
  [
    "Sinister Entry Key",
    "阴森钥匙"
  ],
  [
    "Sinister Chest Key",
    "阴森宝箱钥匙"
  ],
  [
    "Enchanted Entry Key",
    "秘法钥匙"
  ],
  [
    "Enchanted Chest Key",
    "秘法宝箱钥匙"
  ],
  [
    "Donut",
    "甜甜圈"
  ],
  [
    "Blueberry Donut",
    "蓝莓甜甜圈"
  ],
  [
    "Blackberry Donut",
    "黑莓甜甜圈"
  ],
  [
    "Strawberry Donut",
    "草莓甜甜圈"
  ],
  [
    "Mooberry Donut",
    "哞莓甜甜圈"
  ],
  [
    "Marsberry Donut",
    "火星莓甜甜圈"
  ],
  [
    "Spaceberry Donut",
    "太空莓甜甜圈"
  ],
  [
    "Cupcake",
    "纸杯蛋糕"
  ],
  [
    "Blueberry Cake",
    "蓝莓蛋糕"
  ],
  [
    "Blackberry Cake",
    "黑莓蛋糕"
  ],
  [
    "Strawberry Cake",
    "草莓蛋糕"
  ],
  [
    "Mooberry Cake",
    "哞莓蛋糕"
  ],
  [
    "Marsberry Cake",
    "火星莓蛋糕"
  ],
  [
    "Spaceberry Cake",
    "太空莓蛋糕"
  ],
  [
    "Gummy",
    "软糖"
  ],
  [
    "Apple Gummy",
    "苹果软糖"
  ],
  [
    "Orange Gummy",
    "橙子软糖"
  ],
  [
    "Plum Gummy",
    "李子软糖"
  ],
  [
    "Peach Gummy",
    "桃子软糖"
  ],
  [
    "Dragon Fruit Gummy",
    "火龙果软糖"
  ],
  [
    "Star Fruit Gummy",
    "杨桃软糖"
  ],
  [
    "Yogurt",
    "酸奶"
  ],
  [
    "Apple Yogurt",
    "苹果酸奶"
  ],
  [
    "Orange Yogurt",
    "橙子酸奶"
  ],
  [
    "Plum Yogurt",
    "李子酸奶"
  ],
  [
    "Peach Yogurt",
    "桃子酸奶"
  ],
  [
    "Dragon Fruit Yogurt",
    "火龙果酸奶"
  ],
  [
    "Star Fruit Yogurt",
    "杨桃酸奶"
  ],
  [
    "Milking Tea",
    "挤奶茶"
  ],
  [
    "Foraging Tea",
    "采摘茶"
  ],
  [
    "Woodcutting Tea",
    "伐木茶"
  ],
  [
    "Cooking Tea",
    "烹饪茶"
  ],
  [
    "Brewing Tea",
    "冲泡茶"
  ],
  [
    "Alchemy Tea",
    "炼金茶"
  ],
  [
    "Enhancing Tea",
    "强化茶"
  ],
  [
    "Cheesesmithing Tea",
    "奶酪锻造茶"
  ],
  [
    "Crafting Tea",
    "制作茶"
  ],
  [
    "Tailoring Tea",
    "缝纫茶"
  ],
  [
    "Super Milking Tea",
    "超级挤奶茶"
  ],
  [
    "Super Foraging Tea",
    "超级采摘茶"
  ],
  [
    "Super Woodcutting Tea",
    "超级伐木茶"
  ],
  [
    "Super Cooking Tea",
    "超级烹饪茶"
  ],
  [
    "Super Brewing Tea",
    "超级冲泡茶"
  ],
  [
    "Super Alchemy Tea",
    "超级炼金茶"
  ],
  [
    "Super Enhancing Tea",
    "超级强化茶"
  ],
  [
    "Super Cheesesmithing Tea",
    "超级奶酪锻造茶"
  ],
  [
    "Super Crafting Tea",
    "超级制作茶"
  ],
  [
    "Super Tailoring Tea",
    "超级缝纫茶"
  ],
  [
    "Ultra Milking Tea",
    "究极挤奶茶"
  ],
  [
    "Ultra Foraging Tea",
    "究极采摘茶"
  ],
  [
    "Ultra Woodcutting Tea",
    "究极伐木茶"
  ],
  [
    "Ultra Cooking Tea",
    "究极烹饪茶"
  ],
  [
    "Ultra Brewing Tea",
    "究极冲泡茶"
  ],
  [
    "Ultra Alchemy Tea",
    "究极炼金茶"
  ],
  [
    "Ultra Enhancing Tea",
    "究极强化茶"
  ],
  [
    "Ultra Cheesesmithing Tea",
    "究极奶酪锻造茶"
  ],
  [
    "Ultra Crafting Tea",
    "究极制作茶"
  ],
  [
    "Ultra Tailoring Tea",
    "究极缝纫茶"
  ],
  [
    "Gathering Tea",
    "采集茶"
  ],
  [
    "Gourmet Tea",
    "美食茶"
  ],
  [
    "Wisdom Tea",
    "经验茶"
  ],
  [
    "Processing Tea",
    "加工茶"
  ],
  [
    "Efficiency Tea",
    "效率茶"
  ],
  [
    "Artisan Tea",
    "工匠茶"
  ],
  [
    "Catalytic Tea",
    "催化茶"
  ],
  [
    "Blessed Tea",
    "福气茶"
  ],
  [
    "Stamina Coffee",
    "耐力咖啡"
  ],
  [
    "Intelligence Coffee",
    "智力咖啡"
  ],
  [
    "Defense Coffee",
    "防御咖啡"
  ],
  [
    "Attack Coffee",
    "攻击咖啡"
  ],
  [
    "Power Coffee",
    "力量咖啡"
  ],
  [
    "Ranged Coffee",
    "远程咖啡"
  ],
  [
    "Magic Coffee",
    "魔法咖啡"
  ],
  [
    "Super Stamina Coffee",
    "超级耐力咖啡"
  ],
  [
    "Super Intelligence Coffee",
    "超级智力咖啡"
  ],
  [
    "Super Defense Coffee",
    "超级防御咖啡"
  ],
  [
    "Super Attack Coffee",
    "超级攻击咖啡"
  ],
  [
    "Super Power Coffee",
    "超级力量咖啡"
  ],
  [
    "Super Ranged Coffee",
    "超级远程咖啡"
  ],
  [
    "Super Magic Coffee",
    "超级魔法咖啡"
  ],
  [
    "Ultra Stamina Coffee",
    "究极耐力咖啡"
  ],
  [
    "Ultra Intelligence Coffee",
    "究极智力咖啡"
  ],
  [
    "Ultra Defense Coffee",
    "究极防御咖啡"
  ],
  [
    "Ultra Attack Coffee",
    "究极攻击咖啡"
  ],
  [
    "Ultra Power Coffee",
    "究极力量咖啡"
  ],
  [
    "Ultra Ranged Coffee",
    "究极远程咖啡"
  ],
  [
    "Ultra Magic Coffee",
    "究极魔法咖啡"
  ],
  [
    "Wisdom Coffee",
    "经验咖啡"
  ],
  [
    "Lucky Coffee",
    "幸运咖啡"
  ],
  [
    "Swiftness Coffee",
    "迅捷咖啡"
  ],
  [
    "Channeling Coffee",
    "吟唱咖啡"
  ],
  [
    "Critical Coffee",
    "暴击咖啡"
  ],
  [
    "Poke",
    "破胆之刺"
  ],
  [
    "Impale",
    "透骨之刺"
  ],
  [
    "Puncture",
    "破甲之刺"
  ],
  [
    "Penetrating Strike",
    "贯心之刺"
  ],
  [
    "Scratch",
    "爪影斩"
  ],
  [
    "Cleave",
    "分裂斩"
  ],
  [
    "Maim",
    "血刃斩"
  ],
  [
    "Crippling Slash",
    "致残斩"
  ],
  [
    "Smack",
    "重碾"
  ],
  [
    "Sweep",
    "重扫"
  ],
  [
    "Stunning Blow",
    "重锤"
  ],
  [
    "Quick Shot",
    "快速射击"
  ],
  [
    "Aqua Arrow",
    "流水箭"
  ],
  [
    "Flame Arrow",
    "烈焰箭"
  ],
  [
    "Rain Of Arrows",
    "箭雨"
  ],
  [
    "Silencing Shot",
    "沉默之箭"
  ],
  [
    "Steady Shot",
    "稳定射击"
  ],
  [
    "Pestilent Shot",
    "疫病射击"
  ],
  [
    "Penetrating Shot",
    "贯穿射击"
  ],
  [
    "Water Strike",
    "流水冲击"
  ],
  [
    "Ice Spear",
    "冰枪术"
  ],
  [
    "Frost Surge",
    "冰霜爆裂"
  ],
  [
    "Mana Spring",
    "法力喷泉"
  ],
  [
    "Entangle",
    "缠绕"
  ],
  [
    "Toxic Pollen",
    "剧毒粉尘"
  ],
  [
    "Nature's Veil",
    "自然菌幕"
  ],
  [
    "Fireball",
    "火球"
  ],
  [
    "Flame Blast",
    "熔岩爆裂"
  ],
  [
    "Firestorm",
    "火焰风暴"
  ],
  [
    "Smoke Burst",
    "烟爆灭影"
  ],
  [
    "Minor Heal",
    "初级自愈术"
  ],
  [
    "Heal",
    "自愈术"
  ],
  [
    "Quick Aid",
    "快速治疗术"
  ],
  [
    "Rejuvenate",
    "群体治疗术"
  ],
  [
    "Taunt",
    "嘲讽"
  ],
  [
    "Provoke",
    "挑衅"
  ],
  [
    "Toughness",
    "坚韧"
  ],
  [
    "Elusiveness",
    "闪避"
  ],
  [
    "Precision",
    "精确"
  ],
  [
    "Berserk",
    "狂暴"
  ],
  [
    "Elemental Affinity",
    "元素增幅"
  ],
  [
    "Frenzy",
    "狂速"
  ],
  [
    "Spike Shell",
    "尖刺防护"
  ],
  [
    "Arcane Reflection",
    "奥术反射"
  ],
  [
    "Vampirism",
    "吸血"
  ],
  [
    "Revive",
    "复活"
  ],
  [
    "Insanity",
    "疯狂"
  ],
  [
    "Invincible",
    "无敌"
  ],
  [
    "Fierce Aura",
    "物理光环"
  ],
  [
    "Aqua Aura",
    "流水光环"
  ],
  [
    "Sylvan Aura",
    "自然光环"
  ],
  [
    "Flame Aura",
    "火焰光环"
  ],
  [
    "Speed Aura",
    "速度光环"
  ],
  [
    "Critical Aura",
    "暴击光环"
  ],
  [
    "Gobo Stabber",
    "哥布林长剑"
  ],
  [
    "Gobo Slasher",
    "哥布林关刀"
  ],
  [
    "Gobo Smasher",
    "哥布林狼牙棒"
  ],
  [
    "Spiked Bulwark",
    "尖刺盾"
  ],
  [
    "Werewolf Slasher",
    "狼人关刀"
  ],
  [
    "Griffin Bulwark",
    "狮鹫重盾"
  ],
  [
    "Gobo Shooter",
    "哥布林弹弓"
  ],
  [
    "Vampiric Bow",
    "吸血弓"
  ],
  [
    "Cursed Bow",
    "咒怨之弓"
  ],
  [
    "Gobo Boomstick",
    "哥布林火棍"
  ],
  [
    "Cheese Bulwark",
    "奶酪重盾"
  ],
  [
    "Verdant Bulwark",
    "翠绿重盾"
  ],
  [
    "Azure Bulwark",
    "蔚蓝重盾"
  ],
  [
    "Burble Bulwark",
    "深紫重盾"
  ],
  [
    "Crimson Bulwark",
    "绛红重盾"
  ],
  [
    "Rainbow Bulwark",
    "彩虹重盾"
  ],
  [
    "Holy Bulwark",
    "神圣重盾"
  ],
  [
    "Wooden Bow",
    "木弓"
  ],
  [
    "Birch Bow",
    "桦木弓"
  ],
  [
    "Cedar Bow",
    "雪松弓"
  ],
  [
    "Purpleheart Bow",
    "紫心弓"
  ],
  [
    "Ginkgo Bow",
    "银杏弓"
  ],
  [
    "Redwood Bow",
    "红杉弓"
  ],
  [
    "Arcane Bow",
    "神秘弓"
  ],
  [
    "Stalactite Spear",
    "石钟长枪"
  ],
  [
    "Granite Bludgeon",
    "花岗岩大棒"
  ],
  [
    "Regal Sword",
    "君王之剑"
  ],
  [
    "Chaotic Flail",
    "混沌连枷"
  ],
  [
    "Soul Hunter Crossbow",
    "灵魂猎手弩"
  ],
  [
    "Sundering Crossbow",
    "裂空之弩"
  ],
  [
    "Frost Staff",
    "冰霜法杖"
  ],
  [
    "Infernal Battlestaff",
    "炼狱法杖"
  ],
  [
    "Jackalope Staff",
    "鹿角兔之杖"
  ],
  [
    "Cheese Sword",
    "奶酪剑"
  ],
  [
    "Verdant Sword",
    "翠绿剑"
  ],
  [
    "Azure Sword",
    "蔚蓝剑"
  ],
  [
    "Burble Sword",
    "深紫剑"
  ],
  [
    "Crimson Sword",
    "绛红剑"
  ],
  [
    "Rainbow Sword",
    "彩虹剑"
  ],
  [
    "Holy Sword",
    "神圣剑"
  ],
  [
    "Cheese Spear",
    "奶酪长枪"
  ],
  [
    "Verdant Spear",
    "翠绿长枪"
  ],
  [
    "Azure Spear",
    "蔚蓝长枪"
  ],
  [
    "Burble Spear",
    "深紫长枪"
  ],
  [
    "Crimson Spear",
    "绛红长枪"
  ],
  [
    "Rainbow Spear",
    "彩虹长枪"
  ],
  [
    "Holy Spear",
    "神圣长枪"
  ],
  [
    "Cheese Mace",
    "奶酪钉头锤"
  ],
  [
    "Verdant Mace",
    "翠绿钉头锤"
  ],
  [
    "Azure Mace",
    "蔚蓝钉头锤"
  ],
  [
    "Burble Mace",
    "深紫钉头锤"
  ],
  [
    "Crimson Mace",
    "绛红钉头锤"
  ],
  [
    "Rainbow Mace",
    "彩虹钉头锤"
  ],
  [
    "Holy Mace",
    "神圣钉头锤"
  ],
  [
    "Wooden Crossbow",
    "木弩"
  ],
  [
    "Birch Crossbow",
    "桦木弩"
  ],
  [
    "Cedar Crossbow",
    "雪松弩"
  ],
  [
    "Purpleheart Crossbow",
    "紫心弩"
  ],
  [
    "Ginkgo Crossbow",
    "银杏弩"
  ],
  [
    "Redwood Crossbow",
    "红杉弩"
  ],
  [
    "Arcane Crossbow",
    "神秘弩"
  ],
  [
    "Wooden Water Staff",
    "木制水法杖"
  ],
  [
    "Birch Water Staff",
    "桦木水法杖"
  ],
  [
    "Cedar Water Staff",
    "雪松水法杖"
  ],
  [
    "Purpleheart Water Staff",
    "紫心水法杖"
  ],
  [
    "Ginkgo Water Staff",
    "银杏水法杖"
  ],
  [
    "Redwood Water Staff",
    "红杉水法杖"
  ],
  [
    "Arcane Water Staff",
    "神秘水法杖"
  ],
  [
    "Wooden Nature Staff",
    "木制自然法杖"
  ],
  [
    "Birch Nature Staff",
    "桦木自然法杖"
  ],
  [
    "Cedar Nature Staff",
    "雪松自然法杖"
  ],
  [
    "Purpleheart Nature Staff",
    "紫心自然法杖"
  ],
  [
    "Ginkgo Nature Staff",
    "银杏自然法杖"
  ],
  [
    "Redwood Nature Staff",
    "红杉自然法杖"
  ],
  [
    "Arcane Nature Staff",
    "神秘自然法杖"
  ],
  [
    "Wooden Fire Staff",
    "木火法杖"
  ],
  [
    "Birch Fire Staff",
    "桦木火法杖"
  ],
  [
    "Cedar Fire Staff",
    "雪松火法杖"
  ],
  [
    "Purpleheart Fire Staff",
    "紫心火法杖"
  ],
  [
    "Ginkgo Fire Staff",
    "银杏火法杖"
  ],
  [
    "Redwood Fire Staff",
    "红杉火法杖"
  ],
  [
    "Arcane Fire Staff",
    "神秘火法杖"
  ],
  [
    "Eye Watch",
    "掌上监工"
  ],
  [
    "Snake Fang Dirk",
    "蛇牙短剑"
  ],
  [
    "Vision Shield",
    "视觉盾"
  ],
  [
    "Gobo Defender",
    "哥布林防御者"
  ],
  [
    "Vampire Fang Dirk",
    "吸血鬼短剑"
  ],
  [
    "Knight's Aegis",
    "骑士盾"
  ],
  [
    "Treant Shield",
    "树人盾"
  ],
  [
    "Manticore Shield",
    "蝎狮盾"
  ],
  [
    "Tome Of Healing",
    "治疗之书"
  ],
  [
    "Tome Of The Elements",
    "元素之书"
  ],
  [
    "Watchful Relic",
    "警戒遗物"
  ],
  [
    "Bishop's Codex",
    "主教法典"
  ],
  [
    "Cheese Buckler",
    "奶酪圆盾"
  ],
  [
    "Verdant Buckler",
    "翠绿圆盾"
  ],
  [
    "Azure Buckler",
    "蔚蓝圆盾"
  ],
  [
    "Burble Buckler",
    "深紫圆盾"
  ],
  [
    "Crimson Buckler",
    "绛红圆盾"
  ],
  [
    "Rainbow Buckler",
    "彩虹圆盾"
  ],
  [
    "Holy Buckler",
    "神圣圆盾"
  ],
  [
    "Wooden Shield",
    "木盾"
  ],
  [
    "Birch Shield",
    "桦木盾"
  ],
  [
    "Cedar Shield",
    "雪松盾"
  ],
  [
    "Purpleheart Shield",
    "紫心盾"
  ],
  [
    "Ginkgo Shield",
    "银杏盾"
  ],
  [
    "Redwood Shield",
    "红杉盾"
  ],
  [
    "Arcane Shield",
    "神秘盾"
  ],
  [
    "Sinister Cape",
    "阴森斗篷"
  ],
  [
    "Chimerical Quiver",
    "奇幻箭袋"
  ],
  [
    "Enchanted Cloak",
    "秘法披风"
  ],
  [
    "Red Culinary Hat",
    "红色厨师帽"
  ],
  [
    "Snail Shell Helmet",
    "蜗牛壳头盔"
  ],
  [
    "Vision Helmet",
    "视觉头盔"
  ],
  [
    "Fluffy Red Hat",
    "蓬松红帽子"
  ],
  [
    "Acrobatic Hood",
    "杂技师兜帽"
  ],
  [
    "Magician's Hat",
    "魔术师帽"
  ],
  [
    "Cheese Helmet",
    "奶酪头盔"
  ],
  [
    "Verdant Helmet",
    "翠绿头盔"
  ],
  [
    "Azure Helmet",
    "蔚蓝头盔"
  ],
  [
    "Burble Helmet",
    "深紫头盔"
  ],
  [
    "Crimson Helmet",
    "绛红头盔"
  ],
  [
    "Rainbow Helmet",
    "彩虹头盔"
  ],
  [
    "Holy Helmet",
    "神圣头盔"
  ],
  [
    "Rough Hood",
    "粗糙兜帽"
  ],
  [
    "Reptile Hood",
    "爬行动物兜帽"
  ],
  [
    "Gobo Hood",
    "哥布林兜帽"
  ],
  [
    "Beast Hood",
    "野兽兜帽"
  ],
  [
    "Umbral Hood",
    "暗影兜帽"
  ],
  [
    "Cotton Hat",
    "棉帽"
  ],
  [
    "Linen Hat",
    "亚麻帽"
  ],
  [
    "Bamboo Hat",
    "竹帽"
  ],
  [
    "Silk Hat",
    "丝帽"
  ],
  [
    "Radiant Hat",
    "光辉帽"
  ],
  [
    "Dairyhand's Top",
    "挤奶工上衣"
  ],
  [
    "Forager's Top",
    "采摘者上衣"
  ],
  [
    "Lumberjack's Top",
    "伐木工上衣"
  ],
  [
    "Cheesemaker's Top",
    "奶酪师上衣"
  ],
  [
    "Crafter's Top",
    "工匠上衣"
  ],
  [
    "Tailor's Top",
    "裁缝上衣"
  ],
  [
    "Chef's Top",
    "厨师上衣"
  ],
  [
    "Brewer's Top",
    "饮品师上衣"
  ],
  [
    "Alchemist's Top",
    "炼金师上衣"
  ],
  [
    "Enhancer's Top",
    "强化师上衣"
  ],
  [
    "Gator Vest",
    "鳄鱼马甲"
  ],
  [
    "Turtle Shell Body",
    "龟壳胸甲"
  ],
  [
    "Colossus Plate Body",
    "巨像胸甲"
  ],
  [
    "Demonic Plate Body",
    "恶魔胸甲"
  ],
  [
    "Marine Tunic",
    "海洋皮衣"
  ],
  [
    "Revenant Tunic",
    "亡灵皮衣"
  ],
  [
    "Griffin Tunic",
    "狮鹫皮衣"
  ],
  [
    "Icy Robe Top",
    "冰霜长袍"
  ],
  [
    "Flaming Robe Top",
    "烈焰长袍"
  ],
  [
    "Luna Robe Top",
    "月神长袍"
  ],
  [
    "Royal Water Robe Top",
    "皇家水系长袍"
  ],
  [
    "Royal Nature Robe Top",
    "皇家自然系长袍"
  ],
  [
    "Royal Fire Robe Top",
    "皇家火系长袍"
  ],
  [
    "Cheese Plate Body",
    "奶酪胸甲"
  ],
  [
    "Verdant Plate Body",
    "翠绿胸甲"
  ],
  [
    "Azure Plate Body",
    "蔚蓝胸甲"
  ],
  [
    "Burble Plate Body",
    "深紫胸甲"
  ],
  [
    "Crimson Plate Body",
    "绛红胸甲"
  ],
  [
    "Rainbow Plate Body",
    "彩虹胸甲"
  ],
  [
    "Holy Plate Body",
    "神圣胸甲"
  ],
  [
    "Rough Tunic",
    "粗糙皮衣"
  ],
  [
    "Reptile Tunic",
    "爬行动物皮衣"
  ],
  [
    "Gobo Tunic",
    "哥布林皮衣"
  ],
  [
    "Beast Tunic",
    "野兽皮衣"
  ],
  [
    "Umbral Tunic",
    "暗影皮衣"
  ],
  [
    "Cotton Robe Top",
    "棉布上衣"
  ],
  [
    "Linen Robe Top",
    "亚麻上衣"
  ],
  [
    "Bamboo Robe Top",
    "竹上衣"
  ],
  [
    "Silk Robe Top",
    "丝绸上衣"
  ],
  [
    "Radiant Robe Top",
    "光辉上衣"
  ],
  [
    "Dairyhand's Bottoms",
    "挤奶工下装"
  ],
  [
    "Forager's Bottoms",
    "采摘者下装"
  ],
  [
    "Lumberjack's Bottoms",
    "伐木工下装"
  ],
  [
    "Cheesemaker's Bottoms",
    "奶酪师下装"
  ],
  [
    "Crafter's Bottoms",
    "工匠下装"
  ],
  [
    "Tailor's Bottoms",
    "裁缝下装"
  ],
  [
    "Chef's Bottoms",
    "厨师下装"
  ],
  [
    "Brewer's Bottoms",
    "饮品师下装"
  ],
  [
    "Alchemist's Bottoms",
    "炼金师下装"
  ],
  [
    "Enhancer's Bottoms",
    "强化师下装"
  ],
  [
    "Turtle Shell Legs",
    "龟壳腿甲"
  ],
  [
    "Colossus Plate Legs",
    "巨像腿甲"
  ],
  [
    "Demonic Plate Legs",
    "恶魔腿甲"
  ],
  [
    "Marine Chaps",
    "航海皮裤"
  ],
  [
    "Revenant Chaps",
    "亡灵皮裤"
  ],
  [
    "Griffin Chaps",
    "狮鹫皮裤"
  ],
  [
    "Icy Robe Bottoms",
    "冰霜下装"
  ],
  [
    "Flaming Robe Bottoms",
    "烈焰下装"
  ],
  [
    "Luna Robe Bottoms",
    "月神下装"
  ],
  [
    "Royal Water Robe Bottoms",
    "皇家水系下装"
  ],
  [
    "Royal Nature Robe Bottoms",
    "皇家自然系下装"
  ],
  [
    "Royal Fire Robe Bottoms",
    "皇家火系下装"
  ],
  [
    "Cheese Plate Legs",
    "奶酪腿甲"
  ],
  [
    "Verdant Plate Legs",
    "翠绿腿甲"
  ],
  [
    "Azure Plate Legs",
    "蔚蓝腿甲"
  ],
  [
    "Burble Plate Legs",
    "深紫腿甲"
  ],
  [
    "Crimson Plate Legs",
    "绛红腿甲"
  ],
  [
    "Rainbow Plate Legs",
    "彩虹腿甲"
  ],
  [
    "Holy Plate Legs",
    "神圣腿甲"
  ],
  [
    "Rough Chaps",
    "粗糙皮裤"
  ],
  [
    "Reptile Chaps",
    "爬行动物皮裤"
  ],
  [
    "Gobo Chaps",
    "哥布林皮裤"
  ],
  [
    "Beast Chaps",
    "野兽皮裤"
  ],
  [
    "Umbral Chaps",
    "暗影皮裤"
  ],
  [
    "Cotton Robe Bottoms",
    "棉下装"
  ],
  [
    "Linen Robe Bottoms",
    "亚麻下装"
  ],
  [
    "Bamboo Robe Bottoms",
    "竹下装"
  ],
  [
    "Silk Robe Bottoms",
    "丝绸下装"
  ],
  [
    "Radiant Robe Bottoms",
    "光辉下装"
  ],
  [
    "Enchanted Gloves",
    "附魔手套"
  ],
  [
    "Pincer Gloves",
    "蟹钳手套"
  ],
  [
    "Panda Gloves",
    "熊猫手套"
  ],
  [
    "Magnetic Gloves",
    "磁力手套"
  ],
  [
    "Dodocamel Gauntlets",
    "渡渡驼护手"
  ],
  [
    "Sighted Bracers",
    "瞄准护腕"
  ],
  [
    "Chrono Gloves",
    "时空手套"
  ],
  [
    "Cheese Gauntlets",
    "奶酪护手"
  ],
  [
    "Verdant Gauntlets",
    "翠绿护手"
  ],
  [
    "Azure Gauntlets",
    "蔚蓝护手"
  ],
  [
    "Burble Gauntlets",
    "深紫护手"
  ],
  [
    "Crimson Gauntlets",
    "绛红护手"
  ],
  [
    "Rainbow Gauntlets",
    "彩虹护手"
  ],
  [
    "Holy Gauntlets",
    "神圣护手"
  ],
  [
    "Rough Bracers",
    "粗糙护腕"
  ],
  [
    "Reptile Bracers",
    "爬行动物护腕"
  ],
  [
    "Gobo Bracers",
    "哥布林护腕"
  ],
  [
    "Beast Bracers",
    "野兽护腕"
  ],
  [
    "Umbral Bracers",
    "暗影护腕"
  ],
  [
    "Cotton Gloves",
    "棉手套"
  ],
  [
    "Linen Gloves",
    "亚麻手套"
  ],
  [
    "Bamboo Gloves",
    "竹手套"
  ],
  [
    "Silk Gloves",
    "丝手套"
  ],
  [
    "Radiant Gloves",
    "光辉手套"
  ],
  [
    "Collector's Boots",
    "收藏家靴"
  ],
  [
    "Shoebill Shoes",
    "鲸头鹳鞋"
  ],
  [
    "Black Bear Shoes",
    "黑熊鞋"
  ],
  [
    "Grizzly Bear Shoes",
    "棕熊鞋"
  ],
  [
    "Polar Bear Shoes",
    "北极熊鞋"
  ],
  [
    "Centaur Boots",
    "半人马靴"
  ],
  [
    "Sorcerer Boots",
    "巫师靴"
  ],
  [
    "Cheese Boots",
    "奶酪靴"
  ],
  [
    "Verdant Boots",
    "翠绿靴"
  ],
  [
    "Azure Boots",
    "蔚蓝靴"
  ],
  [
    "Burble Boots",
    "深紫靴"
  ],
  [
    "Crimson Boots",
    "绛红靴"
  ],
  [
    "Rainbow Boots",
    "彩虹靴"
  ],
  [
    "Holy Boots",
    "神圣靴"
  ],
  [
    "Rough Boots",
    "粗糙靴"
  ],
  [
    "Reptile Boots",
    "爬行动物靴"
  ],
  [
    "Gobo Boots",
    "哥布林靴"
  ],
  [
    "Beast Boots",
    "野兽靴"
  ],
  [
    "Umbral Boots",
    "暗影靴"
  ],
  [
    "Cotton Boots",
    "棉靴"
  ],
  [
    "Linen Boots",
    "亚麻靴"
  ],
  [
    "Bamboo Boots",
    "竹靴"
  ],
  [
    "Silk Boots",
    "丝靴"
  ],
  [
    "Radiant Boots",
    "光辉靴"
  ],
  [
    "Small Pouch",
    "小袋子"
  ],
  [
    "Medium Pouch",
    "中袋子"
  ],
  [
    "Large Pouch",
    "大袋子"
  ],
  [
    "Giant Pouch",
    "巨大袋子"
  ],
  [
    "Gluttonous Pouch",
    "贪食之袋"
  ],
  [
    "Guzzling Pouch",
    "暴饮之囊"
  ],
  [
    "Necklace Of Efficiency",
    "效率项链"
  ],
  [
    "Fighter Necklace",
    "战士项链"
  ],
  [
    "Ranger Necklace",
    "射手项链"
  ],
  [
    "Wizard Necklace",
    "巫师项链"
  ],
  [
    "Necklace Of Wisdom",
    "经验项链"
  ],
  [
    "Necklace Of Speed",
    "速度项链"
  ],
  [
    "Philosopher's Necklace",
    "贤者项链"
  ],
  [
    "Earrings Of Gathering",
    "采集耳环"
  ],
  [
    "Earrings Of Essence Find",
    "精华发现耳环"
  ],
  [
    "Earrings Of Armor",
    "护甲耳环"
  ],
  [
    "Earrings Of Regeneration",
    "恢复耳环"
  ],
  [
    "Earrings Of Resistance",
    "抗性耳环"
  ],
  [
    "Earrings Of Rare Find",
    "稀有发现耳环"
  ],
  [
    "Earrings Of Critical Strike",
    "暴击耳环"
  ],
  [
    "Philosopher's Earrings",
    "贤者耳环"
  ],
  [
    "Ring Of Gathering",
    "采集戒指"
  ],
  [
    "Ring Of Essence Find",
    "精华发现戒指"
  ],
  [
    "Ring Of Armor",
    "护甲戒指"
  ],
  [
    "Ring Of Regeneration",
    "恢复戒指"
  ],
  [
    "Ring Of Resistance",
    "抗性戒指"
  ],
  [
    "Ring Of Rare Find",
    "稀有发现戒指"
  ],
  [
    "Ring Of Critical Strike",
    "暴击戒指"
  ],
  [
    "Philosopher's Ring",
    "贤者戒指"
  ],
  [
    "Basic Task Badge",
    "基础任务徽章"
  ],
  [
    "Advanced Task Badge",
    "高级任务徽章"
  ],
  [
    "Expert Task Badge",
    "专家任务徽章"
  ],
  [
    "Celestial Brush",
    "星空刷子"
  ],
  [
    "Cheese Brush",
    "奶酪刷子"
  ],
  [
    "Verdant Brush",
    "翠绿刷子"
  ],
  [
    "Azure Brush",
    "蔚蓝刷子"
  ],
  [
    "Burble Brush",
    "深紫刷子"
  ],
  [
    "Crimson Brush",
    "绛红刷子"
  ],
  [
    "Rainbow Brush",
    "彩虹刷子"
  ],
  [
    "Holy Brush",
    "神圣刷子"
  ],
  [
    "Celestial Shears",
    "星空剪刀"
  ],
  [
    "Cheese Shears",
    "奶酪剪刀"
  ],
  [
    "Verdant Shears",
    "翠绿剪刀"
  ],
  [
    "Azure Shears",
    "蔚蓝剪刀"
  ],
  [
    "Burble Shears",
    "深紫剪刀"
  ],
  [
    "Crimson Shears",
    "绛红剪刀"
  ],
  [
    "Rainbow Shears",
    "彩虹剪刀"
  ],
  [
    "Holy Shears",
    "神圣剪刀"
  ],
  [
    "Celestial Hatchet",
    "星空斧头"
  ],
  [
    "Cheese Hatchet",
    "奶酪斧头"
  ],
  [
    "Verdant Hatchet",
    "翠绿斧头"
  ],
  [
    "Azure Hatchet",
    "蔚蓝斧头"
  ],
  [
    "Burble Hatchet",
    "深紫斧头"
  ],
  [
    "Crimson Hatchet",
    "绛红斧头"
  ],
  [
    "Rainbow Hatchet",
    "彩虹斧头"
  ],
  [
    "Holy Hatchet",
    "神圣斧头"
  ],
  [
    "Celestial Hammer",
    "星空锤子"
  ],
  [
    "Cheese Hammer",
    "奶酪锤子"
  ],
  [
    "Verdant Hammer",
    "翠绿锤子"
  ],
  [
    "Azure Hammer",
    "蔚蓝锤子"
  ],
  [
    "Burble Hammer",
    "深紫锤子"
  ],
  [
    "Crimson Hammer",
    "绛红锤子"
  ],
  [
    "Rainbow Hammer",
    "彩虹锤子"
  ],
  [
    "Holy Hammer",
    "神圣锤子"
  ],
  [
    "Celestial Chisel",
    "星空凿子"
  ],
  [
    "Cheese Chisel",
    "奶酪凿子"
  ],
  [
    "Verdant Chisel",
    "翠绿凿子"
  ],
  [
    "Azure Chisel",
    "蔚蓝凿子"
  ],
  [
    "Burble Chisel",
    "深紫凿子"
  ],
  [
    "Crimson Chisel",
    "绛红凿子"
  ],
  [
    "Rainbow Chisel",
    "彩虹凿子"
  ],
  [
    "Holy Chisel",
    "神圣凿子"
  ],
  [
    "Celestial Needle",
    "星空针"
  ],
  [
    "Cheese Needle",
    "奶酪针"
  ],
  [
    "Verdant Needle",
    "翠绿针"
  ],
  [
    "Azure Needle",
    "蔚蓝针"
  ],
  [
    "Burble Needle",
    "深紫针"
  ],
  [
    "Crimson Needle",
    "绛红针"
  ],
  [
    "Rainbow Needle",
    "彩虹针"
  ],
  [
    "Holy Needle",
    "神圣针"
  ],
  [
    "Celestial Spatula",
    "星空锅铲"
  ],
  [
    "Cheese Spatula",
    "奶酪锅铲"
  ],
  [
    "Verdant Spatula",
    "翠绿锅铲"
  ],
  [
    "Azure Spatula",
    "蔚蓝锅铲"
  ],
  [
    "Burble Spatula",
    "深紫锅铲"
  ],
  [
    "Crimson Spatula",
    "绛红锅铲"
  ],
  [
    "Rainbow Spatula",
    "彩虹锅铲"
  ],
  [
    "Holy Spatula",
    "神圣锅铲"
  ],
  [
    "Celestial Pot",
    "星空壶"
  ],
  [
    "Cheese Pot",
    "奶酪壶"
  ],
  [
    "Verdant Pot",
    "翠绿壶"
  ],
  [
    "Azure Pot",
    "蔚蓝壶"
  ],
  [
    "Burble Pot",
    "深紫壶"
  ],
  [
    "Crimson Pot",
    "绛红壶"
  ],
  [
    "Rainbow Pot",
    "彩虹壶"
  ],
  [
    "Holy Pot",
    "神圣壶"
  ],
  [
    "Celestial Alembic",
    "星空蒸馏器"
  ],
  [
    "Cheese Alembic",
    "奶酪蒸馏器"
  ],
  [
    "Verdant Alembic",
    "翠绿蒸馏器"
  ],
  [
    "Azure Alembic",
    "蔚蓝蒸馏器"
  ],
  [
    "Burble Alembic",
    "深紫蒸馏器"
  ],
  [
    "Crimson Alembic",
    "绛红蒸馏器"
  ],
  [
    "Rainbow Alembic",
    "彩虹蒸馏器"
  ],
  [
    "Holy Alembic",
    "神圣蒸馏器"
  ],
  [
    "Celestial Enhancer",
    "星空强化器"
  ],
  [
    "Cheese Enhancer",
    "奶酪强化器"
  ],
  [
    "Verdant Enhancer",
    "翠绿强化器"
  ],
  [
    "Azure Enhancer",
    "蔚蓝强化器"
  ],
  [
    "Burble Enhancer",
    "深紫强化器"
  ],
  [
    "Crimson Enhancer",
    "绛红强化器"
  ],
  [
    "Rainbow Enhancer",
    "彩虹强化器"
  ],
  [
    "Holy Enhancer",
    "神圣强化器"
  ],
  [
    "Milk",
    "牛奶"
  ],
  [
    "Verdant Milk",
    "翠绿牛奶"
  ],
  [
    "Azure Milk",
    "蔚蓝牛奶"
  ],
  [
    "Burble Milk",
    "深紫牛奶"
  ],
  [
    "Crimson Milk",
    "绛红牛奶"
  ],
  [
    "Rainbow Milk",
    "彩虹牛奶"
  ],
  [
    "Holy Milk",
    "神圣牛奶"
  ],
  [
    "Cheese",
    "奶酪"
  ],
  [
    "Verdant Cheese",
    "翠绿奶酪"
  ],
  [
    "Azure Cheese",
    "蔚蓝奶酪"
  ],
  [
    "Burble Cheese",
    "深紫奶酪"
  ],
  [
    "Crimson Cheese",
    "绛红奶酪"
  ],
  [
    "Rainbow Cheese",
    "彩虹奶酪"
  ],
  [
    "Holy Cheese",
    "神圣奶酪"
  ],
  [
    "Log",
    "原木"
  ],
  [
    "Birch Log",
    "白桦原木"
  ],
  [
    "Cedar Log",
    "雪松原木"
  ],
  [
    "Purpleheart Log",
    "紫心原木"
  ],
  [
    "Ginkgo Log",
    "银杏原木"
  ],
  [
    "Redwood Log",
    "红杉原木"
  ],
  [
    "Arcane Log",
    "神秘原木"
  ],
  [
    "Lumber",
    "木板"
  ],
  [
    "Birch Lumber",
    "白桦木板"
  ],
  [
    "Cedar Lumber",
    "雪松木板"
  ],
  [
    "Purpleheart Lumber",
    "紫心木板"
  ],
  [
    "Ginkgo Lumber",
    "银杏木板"
  ],
  [
    "Redwood Lumber",
    "红杉木板"
  ],
  [
    "Arcane Lumber",
    "神秘木板"
  ],
  [
    "Rough Hide",
    "粗糙兽皮"
  ],
  [
    "Reptile Hide",
    "爬行动物皮"
  ],
  [
    "Gobo Hide",
    "哥布林皮"
  ],
  [
    "Beast Hide",
    "野兽皮"
  ],
  [
    "Umbral Hide",
    "暗影皮"
  ],
  [
    "Rough Leather",
    "粗糙皮革"
  ],
  [
    "Reptile Leather",
    "爬行动物皮革"
  ],
  [
    "Gobo Leather",
    "哥布林皮革"
  ],
  [
    "Beast Leather",
    "野兽皮革"
  ],
  [
    "Umbral Leather",
    "暗影皮革"
  ],
  [
    "Cotton",
    "棉花"
  ],
  [
    "Flax",
    "亚麻"
  ],
  [
    "Bamboo Branch",
    "竹子"
  ],
  [
    "Cocoon",
    "蚕茧"
  ],
  [
    "Radiant Fiber",
    "光辉纤维"
  ],
  [
    "Cotton Fabric",
    "棉花布料"
  ],
  [
    "Linen Fabric",
    "亚麻布料"
  ],
  [
    "Bamboo Fabric",
    "竹子布料"
  ],
  [
    "Silk Fabric",
    "丝绸"
  ],
  [
    "Radiant Fabric",
    "光辉布料"
  ],
  [
    "Egg",
    "鸡蛋"
  ],
  [
    "Wheat",
    "小麦"
  ],
  [
    "Sugar",
    "糖"
  ],
  [
    "Blueberry",
    "蓝莓"
  ],
  [
    "Blackberry",
    "黑莓"
  ],
  [
    "Strawberry",
    "草莓"
  ],
  [
    "Mooberry",
    "哞梅"
  ],
  [
    "Marsberry",
    "火星梅"
  ],
  [
    "Spaceberry",
    "太空梅"
  ],
  [
    "Apple",
    "苹果"
  ],
  [
    "Orange",
    "橙子"
  ],
  [
    "Plum",
    "李子"
  ],
  [
    "Peach",
    "桃子"
  ],
  [
    "Dragon Fruit",
    "火龙果"
  ],
  [
    "Star Fruit",
    "杨桃"
  ],
  [
    "Arabica Coffee Bean",
    "低级咖啡豆"
  ],
  [
    "Robusta Coffee Bean",
    "中级咖啡豆"
  ],
  [
    "Liberica Coffee Bean",
    "高级咖啡豆"
  ],
  [
    "Excelsa Coffee Bean",
    "特级咖啡豆"
  ],
  [
    "Fieriosa Coffee Bean",
    "火山咖啡豆"
  ],
  [
    "Spacia Coffee Bean",
    "太空咖啡豆"
  ],
  [
    "Green Tea Leaf",
    "绿茶叶"
  ],
  [
    "Black Tea Leaf",
    "黑茶叶"
  ],
  [
    "Burble Tea Leaf",
    "紫茶叶"
  ],
  [
    "Moolong Tea Leaf",
    "哞龙茶叶"
  ],
  [
    "Red Tea Leaf",
    "红茶叶"
  ],
  [
    "Emp Tea Leaf",
    "虚空茶叶"
  ],
  [
    "Catalyst Of Coinification",
    "点金催化剂"
  ],
  [
    "Catalyst Of Decomposition",
    "分解催化剂"
  ],
  [
    "Catalyst Of Transmutation",
    "转化催化剂"
  ],
  [
    "Prime Catalyst",
    "至高催化剂"
  ],
  [
    "Snake Fang",
    "蛇牙"
  ],
  [
    "Shoebill Feather",
    "鲸头鹳羽毛"
  ],
  [
    "Snail Shell",
    "蜗牛壳"
  ],
  [
    "Crab Pincer",
    "蟹钳"
  ],
  [
    "Turtle Shell",
    "乌龟壳"
  ],
  [
    "Marine Scale",
    "海洋鳞片"
  ],
  [
    "Treant Bark",
    "树皮"
  ],
  [
    "Centaur Hoof",
    "半人马蹄"
  ],
  [
    "Luna Wing",
    "月神翼"
  ],
  [
    "Gobo Rag",
    "哥布林抹布"
  ],
  [
    "Goggles",
    "护目镜"
  ],
  [
    "Magnifying Glass",
    "放大镜"
  ],
  [
    "Eye Of The Watcher",
    "观察者之眼"
  ],
  [
    "Icy Cloth",
    "冰霜织物"
  ],
  [
    "Flaming Cloth",
    "烈焰织物"
  ],
  [
    "Sorcerer's Sole",
    "魔法师鞋底"
  ],
  [
    "Chrono Sphere",
    "时空球"
  ],
  [
    "Frost Sphere",
    "冰霜球"
  ],
  [
    "Panda Fluff",
    "熊猫绒"
  ],
  [
    "Black Bear Fluff",
    "黑熊绒"
  ],
  [
    "Grizzly Bear Fluff",
    "棕熊绒"
  ],
  [
    "Polar Bear Fluff",
    "北极熊绒"
  ],
  [
    "Red Panda Fluff",
    "小熊猫绒"
  ],
  [
    "Magnet",
    "磁铁"
  ],
  [
    "Stalactite Shard",
    "钟乳石碎片"
  ],
  [
    "Living Granite",
    "花岗岩"
  ],
  [
    "Colossus Core",
    "巨像核心"
  ],
  [
    "Vampire Fang",
    "吸血鬼之牙"
  ],
  [
    "Werewolf Claw",
    "狼人之爪"
  ],
  [
    "Revenant Anima",
    "亡者之魂"
  ],
  [
    "Soul Fragment",
    "灵魂碎片"
  ],
  [
    "Infernal Ember",
    "地狱余烬"
  ],
  [
    "Demonic Core",
    "恶魔核心"
  ],
  [
    "Griffin Leather",
    "狮鹫之皮"
  ],
  [
    "Manticore Sting",
    "蝎狮之刺"
  ],
  [
    "Jackalope Antler",
    "鹿角兔之角"
  ],
  [
    "Dodocamel Plume",
    "渡渡驼之翎"
  ],
  [
    "Griffin Talon",
    "狮鹫之爪"
  ],
  [
    "Acrobat's Ribbon",
    "杂技师彩带"
  ],
  [
    "Magician's Cloth",
    "魔术师织物"
  ],
  [
    "Chaotic Chain",
    "混沌锁链"
  ],
  [
    "Cursed Ball",
    "诅咒之球"
  ],
  [
    "Royal Cloth",
    "皇家织物"
  ],
  [
    "Knight's Ingot",
    "骑士之锭"
  ],
  [
    "Bishop's Scroll",
    "主教卷轴"
  ],
  [
    "Regal Jewel",
    "君王宝石"
  ],
  [
    "Sundering Jewel",
    "裂空宝石"
  ],
  [
    "Butter Of Proficiency",
    "精通之油"
  ],
  [
    "Thread Of Expertise",
    "专精之线"
  ],
  [
    "Branch Of Insight",
    "洞察之枝"
  ],
  [
    "Gluttonous Energy",
    "贪食能量"
  ],
  [
    "Guzzling Energy",
    "暴饮能量"
  ],
  [
    "Milking Essence",
    "挤奶精华"
  ],
  [
    "Foraging Essence",
    "采摘精华"
  ],
  [
    "Woodcutting Essence",
    "伐木精华"
  ],
  [
    "Cheesesmithing Essence",
    "奶酪锻造精华"
  ],
  [
    "Crafting Essence",
    "制作精华"
  ],
  [
    "Tailoring Essence",
    "缝纫精华"
  ],
  [
    "Cooking Essence",
    "烹饪精华"
  ],
  [
    "Brewing Essence",
    "冲泡精华"
  ],
  [
    "Alchemy Essence",
    "炼金精华"
  ],
  [
    "Enhancing Essence",
    "强化精华"
  ],
  [
    "Swamp Essence",
    "沼泽精华"
  ],
  [
    "Aqua Essence",
    "海洋精华"
  ],
  [
    "Jungle Essence",
    "丛林精华"
  ],
  [
    "Gobo Essence",
    "哥布林精华"
  ],
  [
    "Eyessence",
    "眼精华"
  ],
  [
    "Sorcerer Essence",
    "法师精华"
  ],
  [
    "Bear Essence",
    "熊熊精华"
  ],
  [
    "Golem Essence",
    "魔像精华"
  ],
  [
    "Twilight Essence",
    "暮光精华"
  ],
  [
    "Abyssal Essence",
    "地狱精华"
  ],
  [
    "Chimerical Essence",
    "奇幻精华"
  ],
  [
    "Sinister Essence",
    "阴森精华"
  ],
  [
    "Enchanted Essence",
    "秘法精华"
  ],
  [
    "Task Crystal",
    "任务水晶"
  ],
  [
    "Star Fragment",
    "星光碎片"
  ],
  [
    "Pearl",
    "珍珠"
  ],
  [
    "Amber",
    "琥珀"
  ],
  [
    "Garnet",
    "石榴石"
  ],
  [
    "Jade",
    "翡翠"
  ],
  [
    "Amethyst",
    "紫水晶"
  ],
  [
    "Moonstone",
    "月亮石"
  ],
  [
    "Sunstone",
    "太阳石"
  ],
  [
    "Philosopher's Stone",
    "贤者之石"
  ],
  [
    "Crushed Pearl",
    "珍珠碎片"
  ],
  [
    "Crushed Amber",
    "琥珀碎片"
  ],
  [
    "Crushed Garnet",
    "石榴石碎片"
  ],
  [
    "Crushed Jade",
    "翡翠碎片"
  ],
  [
    "Crushed Amethyst",
    "紫水晶碎片"
  ],
  [
    "Crushed Moonstone",
    "月亮石碎片"
  ],
  [
    "Crushed Sunstone",
    "太阳石碎片"
  ],
  [
    "Crushed Philosopher's Stone",
    "贤者之石碎片"
  ],
  [
    "Shard Of Protection",
    "保护碎片"
  ],
  [
    "Mirror Of Protection",
    "保护之镜"
  ]
]



export {items}