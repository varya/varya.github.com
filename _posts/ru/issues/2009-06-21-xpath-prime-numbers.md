---

title: Простые числа и XPath

categories: ru issues

layout: post

---

Иногда мы на работе решаем интересные задачки. Вот, например, одна (почти первая) в постановке <a href="http://alpha-san.ya.ru/"><span style="color: #000000;"><strong><span style="color: #ff0000;">n</span>op`а</strong></span></a>:

<strong>Частный случай:</strong>
Дан такой xml: 
[cc lang="xml"]
<items>
   <item>1</item>
   <item>2</item>
   ...
   <item>N-1</item>
   <item>N</item>
</items> 
[/cc]
т.е. выписаны все натуральные числа от 1 до N включительно. Про N ничего заранее не известно --
большое, маленькое, еще какое-то &mdash; мы не знаем. 

Нужно. Написать <strong>xpath</strong>, выбирающий все item'ы с простыми числами.
Подчеркиваю - <strong>xpath</strong>.<!--more-->
Т.е. внутри тега xsl:stylesheet должен быть один примерно такой шаблон:

[cc lang="xslt"]
<xsl:template match="/">
   <xsl:copy-of select="......."/>
</xsl:template>
[/cc]

и больше ничего &mdash; ни переменных, ни других шаблонов, ни функций.

На выходе будет что-то типа:

[cc lang="xml"]
<item>2</item>
<item>3</item>
<item>5</item>
<item>7</item>
... 
[/cc]

Решение следующее:

[cc lang="xslt"]
<xsl:template match="/">
       <items>
           <xsl:copy-of select="items/item[not(preceding-sibling::item[(last() + 1) mod . = 0 and . != 1]) and . != 1]"/>
       </items>
</xsl:template> 
[/cc]

<strong>Общая задача</strong>
Усложненный вариант &mdash; все тоже самое, но в xml просто набор item'ов с какими-то натуральными числами
в каком-то порядке, например:
[cc lang="xml"]
<items>
   <item>142</item>
   <item>73</item>
   <item>10000341</item>
   <item>10</item>
   ...
</items> 
[/cc]

Решение:
[cc lang="xslt"]
<xsl:template match="/">
       <items>
           <xsl:copy-of select="items/item[not(
               str:tokenize(str:padding(. - 1, '1'), '')[(last() + 1 ) mod position()= 0 and position() != 1]
           )
           and . != 1]"/>
       </items>
</xsl:template>
[/cc]
Чтобы понять, что тут делается, надо прочитать про функции <a href="http://exslt.org/str/functions/padding/index.html">padding</a> и <a href="http://exslt.org/str/functions/tokenize/index.html">tokenize</a> на EXSLT.org.
