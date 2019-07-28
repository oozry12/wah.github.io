---
title: Xposed for Android N
date: 2017/7/21 20:26:25
tags: [xposed,tech]

---

据说最新xposed支持Android 7.x系统，大家一片欢呼，等得不要太久。简直饥渴啊。高兴是高兴，咱还要理性看待。
但是，请大家注意慎重考虑，原因如下：

1、开发者并非xposed的原创rovo89大神，目前所有的项目都是基于abforce这位开发者

2、xposed框架功能非常强大，是系统层级的修改，代码质量与维护水平影响到整个手机系统的稳定性，可能随时崩溃

3、Android生态圈比较开放自由，鱼龙混杂，在所谓的刷机包内可能嵌入恶意代码，恶意扣费推广之类

4、原创作者早就完成这一步骤，但很快抛弃这一想法，正在提高框架稳定性。目前很多模块没更新，框架有了没模块用
<!--more-->
----------------------------------------------------------（分割线 下面是这个项目的一些来龙去脉）-------------------------------


> **缘起**

开发者abforce感觉很久没框架用，在github给rovo89大神发issues要他帮忙写开发文档，给包括他在内的有时间的开发者开发xposed_art_n。
而rovo89据说在搬家没太多空开发。开发者abforce之后直接嘲笑他，是不是玩其他小东西去了没时间了。
原话

```
What do you think? Do you have time for this or would prefer to still enjoy your life (and possibly playing with your puppies)?
```

> **再次邂逅**

后面 'abforce' 君强硬魔改了很多代码，再集成到系统内，然后要求 'rovo89' 帮忙review代码，并且diff出不同项目的区别。
rovo89回应道：

```
The actual implementation is the smallest part of developing Xposed. Getting the knowledge about how the ART compiler and runtime works and finding ways to integrate Xposed with maximum compatiblity is the most time-consuming and complex part. Books could be written about the small, yet very important details that have to be considered. Sometimes when I understood how a particular implementation works and which tricks they're using, I indeed think I should write something up about it, but that would take me even more time (which I currently don't have).
```
（大概意思是新版本的ART机制很复杂，他正在研究破译内部技巧，而对于兼容性的探索是最耗时间也是最难的部分，他在记录一些，但不可能抽出大片空白时间写这么宏大的开发文档）


> **再度回应**：


```
Congrats ;) Unfortunately, I can't review your changes, it's just too much and I don't remember all those details where I deviated from simply porting the Marshmallow changes and which additional changes were required to make it reliable (i.e. to ensure that the hooks are called even with compiler optimizations).

As you already mentioned, your changes could only work for ROMs compiled from scratch with Xposed already active, so people should understand that this won't work (at least not reliably) on their stock or otherwise pre-compiled ROMs.
```
（大概意思是 恭喜，呵呵。我不可能能短时间内review你的修改部分，很难回忆起来大量的仅仅只是从M版本移植到N版本细节，这些修改能否保证在编译器优化后仍然能正常使用仍然是不确定的。正如你提到的，你利用集成入系统的框架，那么就算用户理解为用处不大，或者说不靠谱。因为太多用户还在官方系统而不是预编译好的ROM）


> **再次交锋**

abforce君再次感谢大神的回复。在发现很多的崩溃和不正常运行的问题后，再次要求rovo89君review代码

```
But there's a problem when GC runs, specifically I suspect that heap or stack will be malformed when XPrivacy is enabled.

As I traced down the error, the problem seems to be related to visiting roots when GC marks objects. Moving form M to N, just one of your commits I couldn't port directly, that of ArtMethod::VisitRoots.

Also enabling hook resources causes the problem when GC runs, are you sure your modified Object.Clone() doesn't cause memory issues?
```
（大概意思是有些模块如XPrivacy 报错，他搞不懂一些问题）


> **高潮**

开源手机界瞬间炸开了锅。很多开发者简单地利用abforce君的简单教程，集成编译了很多roms，但全部都是基于他的代码，大部分也可以开机，并且有些模块看似正常运行。



> **再次澄清表态**

今天5小时前

```
Surprisingly by porting M changes to N everything works well,
From my experience, I can tell you that it's indeed not that hard to get the basics done, but it takes a hell lot of time for the details. It's like the 80-20 rule, except that it's more like 95-5 or so.

The hooking approach I have designed for the previous releases is rather stable and can be applied for newer releases as well. I assume you needed most of the time to check all the places where IsProxyMethod() and IsDirect() is called and decide whether they should consider the new method modifier or not (i.e. use parameter true or not). If you didn't do that, you might have missed some places where they have newly introduced such calls. Same for methods like InstallStubsForMethod(), which needs to operate on the original original method even when they're called for a hooked method. You'd need to check for more places where this could be relevant. That's still in the range of days, but if you miss to do it, you might see obscure crashes or misbehavior that are very hard to debug.

Besides that, you took an approach where hooks would only work properly for ROMs which are entirely compiled from scratch. On stock ROMs and even most custom ROMs (that didn't include your port while building) as well as for any apps the device might have compiled before. So you'd have to start all over again with a wiped device running a special ROM. If not, then optimizations (e.g. inlining) might prevent a method from being called at all, and hence hooks wouldn't work. The worst thing about this is that the exact behavior would depend on the ROM, or even how the user uses the device (now that apps are compiled based on profiles). Modules would fail randomly and the module developers would be wondering what they did wrong (answer: nothing). If not all of the prerequisites are fulfilled, it's a pretty unreliable API. Imagine Google published an update where the OnClickListener of a button wasn't called sometimes, unless you compiled your ROM from scratch... For me personally, this is a big limitation.

There is a flashable xposed for N available here:
https://forum.xda-developers.com/xposed/unofficial-xposed-v87-unofficial-yes-im-t3639192
It seems like it's for AOSP ROMs
Their code is @abforce's port, with all the limitations I listed above. :roll_eyes: It doesn't make sense at all to publish flashable ZIPs with this, as the port is only intended for recompiling a ROM from scratch.
And as I feared, there is not a single warning that this is an incomplete port that will often fail to fulfill the API contract. :angry: That's bad for developers and users, they should at least know it's incomplete so they can decide whether they want to support/use it. I would never dare to do something like that without a big fat warning. Actually, as I'm rather perfectionist, I wouldn't publish an incomplete version at all, reliablity is very important for me.

I just checked my Git log and I had the basic hooking (as in this port) ready in October. Since then, I have worked on removing the limitations. To make it more reliable on pre-compiled ROMs, I could have ported the recompiling part as well, however that's still not ideal. As explained somewhere above, we have JIT now, which allows us to keep all the optimizations, only invalidating (and possibly recompiling) the methods which are directly affected by hooking. This is quite challenging, as it's more than just copy & paste. And until this isn't done, I won't publish anything. 9 months for that (until now) is really a long time, I know, but hey, it's my spare time and e.g. due to moving to a new apartment, I couldn't work on Xposed for several months (!) at all, and had only very limited time otherwise.

As I traced down the error, the problem seems to be related to visiting roots when GC marks objects.
Also enabling hook resources causes the problem when GC runs, are you sure your modified Object.Clone() doesn't cause memory issues?
I just commented on your diff. There's no real difference in my code for these two methods, so you'll have to debug it yourself. I know this can be hard, as the real culprit can sometimes be in a totally different place. Even if it ends up to be a single character that needs to be changed, you can easily spend dozens of hours on debugging one issue. That said - if you're seriously interested in contributing, this might be a good challenge. :wink:
```

（大概意思是基础部分，移植过去不难，但是正如著名的二八定律，后面更耗时间更困难。我之前的代码设计都可以沿用到新版本，如果只关注局部，后期你将很难debug排查整个项目的bug。基于必须集成入ROM，如果遇到奇怪的设备或者系统，你将要从头编译排查。因为这种不兼容性，很多模块会随机性地出错。对于完美主义者的我，我绝对不会发布任何没完成的有巨大风险的项目代码，可靠性是我的第一标准。回顾我的代码提交记录，早在去年10月我都完成这部分工作，自从那以后，我一直致力于研究可靠性与兼容性。在我个人时间里，我搬家花费了不少，但我还是投入开发研究。我已经检查了你的修改，并没有太多的新的东西，所以你需要自己排查。最后祝你迎接挑战，好好加油）


> **最后忠告**

rovo89说道：


```
And just to add to my reply above: Imagine I published my current WIP now. I bet that some people would publish it as their build, without any warnings that it's incomplete and not intended to be used productively.
```

（大概意思是希望大家附上我的忠告，这些不完整的修改不应该用在生产环境）


以上原文全部在github中。酷安，和微博也有 各路大神（包括吴大）的看法与说明。

```
github.com/rovo89/Xposed/issues/230
abforce的代码项目 github.com/abforce/xposed_art_n
```



全程手打。理性分析。大神轻轻拍。

![1](http://static.oneplus.cn/data/attachment/forum/201707/20/204103fr0v07a3sx08et74.png.w_768.png)
![2](http://static.oneplus.cn/data/attachment/forum/201707/20/204103v0htzvhxughxvthh.png.w_768.png)
