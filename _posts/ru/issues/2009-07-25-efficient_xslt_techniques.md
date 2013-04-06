---

title: XSLT - результативные технологии программирования

categories: ru issues

layout: post

---

Перевод документа <a
href="http://www.xml.org/sites/www.xml.org/files/xslt_efficient_programming_techniques.pdf">XSLT
- Efficient Programming Techniques</a>, который мне очень помог.

С ростом популярности XML как средства взаимодействия с различными системами,
все больше и больше организаций приходят к XML, чтобы решить свои вопросы
функциональной совместимости. Вместе с попытками архитекторов достигнуть ясного
разделения между отображением и бизнес-логикой, XSLT становится важнее. XSL, по
сути, - это XML-документ (дерево, согласно спецификации DTD), который
применяется к древовидным структурам данных (XML-документ), чтобы выработать
результирующее дерево.

Эта статья представляет список лучших приемов, используемых для написания
XSLT-преобразований. Эта статья может быть использована как направление к
лучшему пути достижения нужных результатов в XSL. Она предназначается для
разработчиков, которые знакомы с основами XSL, но нуждаются в указателе на
действенный путь программирования на XSL. Информация в этой статье основана на
моём собственном опыте в XML и XSL. Список лучших приемов составлен по различным
источникам, чтобы сделать всеобъемлющий документ, который будет расти, если
найдётся больше хороших приемов. Если у вас есть несколько очень хороших
приёмов, которым вы следуете и которых нет в этом списке, скиньте мне на email
*[pboundre@gr.com](mailto:pboundre@gr.com)*.

<h2>Подключение внешних файлов - правильный путь</h2>
Есть три способа включения внешних файлов в ваш xsl:

Если у вас есть дополнительные HTML-файлы, которые вы хотите включить в ваш
результат без изменений, возможно самый простой путь получить его в вашем
результирующем дереве - это включить его как внешнюю синтаксическую сущность
(entity) в преобразование. Это влечет за собой объявление сущности и
обращение к ней в вашем преобразовании.

 **`header.html`:**<br/>
{% highlight html %}
<table>
  <tr>
    <td><a href="/">Home</a></td>
    <td><a href="/movies/">Movies</a></td>
    <td><a href="/shop/">Shop</a></td>
  </tr>
</table>
{% endhighlight %}

**`data.xsl`:**<br/>
{% highlight xml %}
<?xml version="1.0"?>
<!DOCTYPE xsl:stylesheet [
<!-- declares header.html as an external parsed entity
-->
<!ENTITY header SYSTEM "header.html">
]>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head><title>People</title></head>
            <body>
            <!-- includes header.html directly -->
            &header;
            <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
{% endhighlight %}

 Или у вас есть дополнительные XML-файле, которые вы хотели бы преобразовать и
 включить в документ, над которым вы работаете.<br/>
Если у вас есть XML-файл, который вы хотели бы включить в результат, вам нужно
использовать функцию `document()`, чтобы поучить доступ к информации, и вам нужны
шаблоны в вашем преобразовании, чтобы обработать их и включить в результирующее
дерево:

**`header.xml`:**<br/>
{% highlight xml %}
<menu>
    <item href="/">Home</item>
    <item href="/movies/">Movies</item>
    <item href="/shop/">Shop</item>
</menu>
{% endhighlight %}

**`data.xsl`:**<br/>
{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head><title>People</title></head>
            <body>
                <!-- applies templates to the information contained in
                header.xml -->
                <xsl:apply-templates select="document('header.xml')"/>

                <!-- applies templates to the input file -->
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>

    <!-- transforms the XML in header.xml into the table we want -->
    <xsl:template match="menu">
        <table>
            <tr>
                <xsl:for-each select="item">
                    <td><a href="{@href}"><xsl:value-of select="."/></a></td>
                </xsl:for-each>
            </tr>
        </table>
    </xsl:template>
</xsl:stylesheet>
{% endhighlight %}

Или же у вас есть внешние дополнительные XSLT-файлы, которые вы бы хотели
использовать, чтобы формировать результирующее дерево:<br/>
Пусть у вас есть входящий XML-документ, который включает включает некоторую
информацию, нужную вам как и остальные данные на странице, вы захотите
импортировать (import) или включить (include) преобразования для них, так чтобы
шаблоны, определённые в них использовались будто они часть основного
преобразования. То, что вам нужно: `xsl:import` или `xsl:include` - зависит от того,
хотите ли вы переопределять шаблоны (или часть из них), которые заданы во
включаемом преобразовании. Если хотите, используйте xsl:import, в противном
случае - `xsl:include`.

**`data.xml`:**<br/>
{% highlight xml %}
<?xml version="1.0"?>
<doc>
    <menu>
        <item href="/">Home</item>
        <item href="/movies/">Movies</item>
        <item href="/shop/">Shop</item>
    </menu>
    <people>
        <person age="50" name="larry"/>
        <person age="50" name="larry"/>
    </people>
</doc>
{% endhighlight %}

**`header.xsl`:**<br/>
{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="menu">
        <table>
            <tr>
                <xsl:for-each select="item">
                     <td><a href="{@href}"><xsl:value-of select="." /></a></td>
                 </xsl:for-each>
              </tr>
          </table>
      </xsl:template>
</xsl:stylesheet>
{% endhighlight %}

**`data.xsl`:**<br/>
{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- includes the templates from theheader.xsl stylesheet -->

    <xsl:include href="header.xsl" />

    <xsl:template match="/">
        <html>
            <head><title>People</title></head>
            <body>
                <!-- applies templates to the menu definition to create the
                header - the templates come from header.xsl -->
                <xsl:apply-templates select="doc/menu" />
                <!-- applies templates to the data to create the rest of the
                document -->
                <xsl:apply-templates select="doc/people" />
            </body>
         </html>
      </xsl:template>
      ...
</xsl:stylesheet>
{% endhighlight %}

Вам также стоит иметь преобразование, включающее шаблоны для видоизменения
информации в что-то, что вам нужно.

##Используйте XSL шаблоны проектирования (patterns)

###Метод Кая для нахождения пересечения, разности и дизъюнкции множеств

Единственная операция над множествами, предоставляемая XSLT, - это объединение.
Оно может быть описано с использованием оператора объединения из XPath и XSLT -
"`|`". Можно выразить пересечение двух наборов узлов (node set) на чистом XPath.
Этот способ был открыт Майклом Каем (Michael Kay) и известен как метод Кая
(Kaysian method).

{% highlight xml %}
<xsl:variable name="intersection" select="$ns[count(.|$ns2) = count ($ns2)]"/>

<xsl:variable name="set-difference" select="$ns1[count(.|$ns2) != count($ns2)]"/>
{% endhighlight %}

Пример:<br/>
{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:data="crane" version="1.0">
    <xsl:output method="text"/>
    <data:data> <!--data source for testing purposes-->
        <item>1</item><item>2</item><item>3</item>
        <item>4</item><item>5</item><item>6</item>
    </data:data>

    <xsl:template match="/"> <!--root rule-->
        <xsl:variable name="ns1" select="//item[position()>1]"/>
        <xsl:variable name="ns2" select="//item[position()&lt;5]"/>

        <xsl:for-each select="$ns1[count(.|$ns2)=count($ns2)]">
            Intersection: <xsl:value-of select="."/>
        </xsl:for-each>

        <xsl:for-each select="(
                        $ns1[count(.|$ns2)!=count($ns2)] |
                        $ns2[count(.|$ns1)!=count($ns1)]
                        )">
            Difference: <xsl:value-of select="."/>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
{% endhighlight %}

Результат:

    Intersection: 2
    Intersection: 3
    Intersection: 4
    Difference: 1
    Difference: 5
    Difference: 6

###Метод Вендела Пая для нерекурсивного цикла

Метод Вендела Пая (Wendell Pie) демонстрирует способ избежать XSLT-рекурсии при
применении циклов.

Пример:<br/>
{% highlight xml %}
<Tag ID="1">
    <Value>4</Value>
</Tag>
<Tag ID="2">
    <Value>2</Value>
</Tag>
{% endhighlight %}

Требующийся результат:<br/>
{% highlight html %}
<TABLE>
    <TR ID="1">
        <TD> </TD>
        <TD> </TD>
        <TD> </TD>
        <TD> </TD>
    </TR>
</TABLE>
<TABLE>
    <TR ID="2">
        <TD> </TD>
        <TD> </TD>
    </TR>
</TABLE>
{% endhighlight %}

Другими словами, я хочу создать набор новых узлов, количество которых основано
на значении Value, содержащемся в документе. Ниже я представляю маленькое
обобщение,  которое не  зависит от числа узлов в исходном XML-документе и
использует вместо этого число узлов в преобразовании:

{% highlight xml %}
<xsl:template match="TAG">
<TABLE>
    <TR ID="@ID">
        <xsl:for-each select="(document('')//*)[position() &lt;= Value]">
            <TD> </TD>
        </xsl:for-each>
    </TR>
</TABLE>
</xsl:template>
{% endhighlight %}

Здесь используется количество элементов в преобразовании. Это количество будет
значительно превышено, если мы будем проверять на разные типы узлов, например:

{% highlight xml %}
<xsl:for-each select="($st//node()| $st//@* | $st//namespace::*) [position() &lt;= Value]">
{% endhighlight %}

где `$st` определено как  `document('')`, то есть корневой узел преобразования.

###Метод условной выборки Оливера Беккера
Воможность XPath выбирать список узлов, основываясь на сложных условиях, очень
мощная. Хотя ей недостаёт возможностей для определения строки как
противоположного набору узлов. Вам часто нужно использовать навороченную
xsl:choose конструкцию только чтобы определить, что-то вроде "в случае 1
используй строку 1, в случае 2 - строку 2, ..., в случае N - строку N.?

Во всех таких случаях нам нужен способ, который позволил бы нам определять в
XPath-выражении строку, которая зависит от условия или условий.

Теперь о том, как это сделать:<br/>
Мы хотим получить XPath-выражение, которое возвращает строку, когда некоторое
заданное условие истинно, и возвращает пустую строку, если это условие ложно.
Можно условиться, что true - это "1", а false - это "0". Но как подогнать "1" к
какой-то строке? Какую функцию для работы со строкой мы могли бы использовать?
<em>substring()</em> кажется достаточно удобной. А вот и трюк: мы можем
использовать substring() только с двумя аргументами: substring(str, nOffset)
возвратит остаток строки str, начинающийся с позиции nOffset.

В частности:<br/>
 * `substring(str, 1)` возвращает целую строку<br/>
 * `substring(str, [очень большое число])` возвратит пустую строку, если это
 большое число гарантированно больше, чем длина строки.

Таким образом, выражение, которое мы могли бы использовать, будет:

{% highlight java %}
concat(
    substring( str1, exp( условие ) ),
    substring( str2, exp( not(условие) ) )
)
{% endhighlight %}
и мы хотим, чтобы `exp(условие)` было 1, если условие истинное и Infinity, если
условие ложное.

Мы выражаем exp(условие) так:
`1 div условие`, потому что булево значение сначала преобразуется в число (true
- в 1, а false - в 0), мы получим в точности:

{% highlight java %}
exp(true) = 1
exp(false) = Infinity
{% endhighlight %}

Итог:<br/>
XPath-выражение, возвращающее одну строку, если условие истинно и другую, если
оно ложно, такое:
{% highlight java %}
concat(
    substring(Str1, 1 div условие),
    substring(Str2, 1 div условие)
)
{% endhighlight %}
Впервые это было использовано Оливером Беккером (Oliver Becker) и названо как
метод Беккера.

Например:<br/>
Я хочу написать темплейт, который создаёт текст: "My department",  если передан
параметр "IT" и текст "Some other department", если значение параметра другое.

Конечно, никаких `xsl:if` или `xsl:when` не допускается.

Пример кода:<br/>
{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:data="crane" version="1.0">

  <xsl:output method="text"/>

  <xsl:template match="/">
    IT:
    <xsl:call-template name="whoIs">
      <xsl:with-param name="department" select="'IT'" />
    </xsl:call-template>
    <br/>
    Finance:
    <xsl:call-template name="whoIs">
      <xsl:with-param name="department" select="'Finance'" />
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="whoIs">
    <xsl:param name="department" select="someDepartment" />
    <br/>
    <xsl:value-of select="
      concat(
        substring('My department', 1 div ($department = 'IT')),
        substring('Some other department', 1 div not(($department = 'IT')))
      )" />
    <br/>
  </xsl:template>
</xsl:stylesheet>
{% endhighlight %}

###Используйте метод Мюнха для группировки
Группировка часто плохо осуществляется в XSL. Обычно эта задача возникает, когда
вы получаете XML-вывод (несгруппированный) из базы данных и должны сгруппировать
его средствами XSL. База данных обычно выдаёт вам результаты, структурированные
согласно записям в ней. Например, давайте рассмотрим таблицу служащих, из
которой получается такой XML:

{% highlight xml %}
<data>
  <employee no="1">
    <name>Prathit Bondre</name>
    <department>IT</department>
  </employee>
  <employee no="2">
    <name>Adheet Bondre</name>
    <department>Finance</department>
  </employee>
  <employee no="3">
    <name>Sinan Edil</name>
    <department>IT</department>
  </employee>
  <employee no="4">
    <name>Jeremy King</name>
    <department>Finance</department>
  </employee>
</data>
{% endhighlight %}

Требуется такой вывод:

    <strong>Finance</strong>
    Adheet Bondre
    Jeremy King

    <strong>IT</strong>
    Prathit Bondre
    Sinan Edil

Задача состоит в том, чтобы превратить этот плоский вывод в список,
сгруппированный по департаментам, чтобы дать требуемый результат, который
показан выше.

Есть два шага на пути к решению:

 * Узнать, какие департаменты существуют
 * Получить всех служащих, которые относятся к одному департаменту

Узнать, какие департаменты существуют, можно выбрав по одному сотруднику из
каждого департамента в XML, который может с успехом быть первым, кто попадётся.
Один способ найти их - это взять тех сотрудников, которые не относятся к
департаменту из множества департаментов предыдущих сотрудников.

{% highlight xml %}
employee[not(department = preceding-sibling::employee/department)]
{% endhighlight %}

Определив таких сотрудников, легко найти их департаменты и собрать вместе всех
сотрудников из одного и того же департамента:

{% highlight xml %}
<xsl:apply-template select="data/employee[department = current()/department]"/>
{% endhighlight %}

Проблема этого метода в том, что он включает в себя два XPath-выражения,
вычисление которых потребует много ресурсов для больших XML-документов. Поиск по
всем предыдущим братьям с осью 'preceding-sibling' занимает много времени, если
вы ближе к конце записей. Кроме того, получение всех контактов определённых
департаментов каждый раз включает в себя поиск одного сотрудника.

####Метод Мюнха
Этот метод разработан Стивом Мюнхом (Steve Muench) для представления этих
функций более эффективным способом с использованием ключей. Ключи работают путём
назначения значения ключа узлу и дают прямой доступ к узлу через такое значение.
Если элементов, у которых один и тот же ключ, много, то все эти элементы
найдутся, когда вы воспользуетесь этим ключом. В сущности, это означает, что
если вы хотите сгруппировать множество узлов согласно какому-то свойству узла,
вы можете использовать ключи.

В примере выше мы хотим сгруппировать сотрудников согласно их департаментам,
поэтому мы создаём ключ, который назначает каждому сотруднику значение ключа,
которое берётся из департамента этого сотрудника. Узлы, которые мы хотим
сгруппировать должны быть подставлены в атрибут "match". Значение ключа, которые
мы хотим использовать записывается в атрибут "use".

{% highlight xml %}
<xsl:key name="employees-by-department" match="employee" use="department"/>
{% endhighlight %}

Однажды определив ключ, зная департамент, мы можем быстро получить доступ ко
всем сотрудникам этого департамента.<br/>
Например, ключ `key('employees-by-department', 'IT')` даст записи с
департаментом "IT".

Однако, первое, что нам надо сделать,- это определить, какие бывают
департаменты, что включает в себя нахождение первого сотрудника в XML для
каждого департамента. Здесь мы снова можем использовать ключи. Мы знаем, что
сотрудник будет частью списка узлов, которые можно получить по ключу данного
департамента: вопрос в том, будет ли он первым в этом списке (который упорядочен
как записи в XML-документе) или ниже? Нас интересуют только записи, идущие
первыми в списке.<br/>
Выяснение, является ли сотрудник первым в списке, возвращённом по ключу,
подразумевает сравнение узла employee с первым узлом в списке. Этот способ также
может быть использован для получения отдельных элементов в XML-файле. Есть пара
характерных способов проверки, идентичны ли два узла:

 * Сравнить уникальные идентификаторы, сгенерированные для узлов (используя
 `generate-id()`):

{% highlight xml %}
employee[generate-id() = generate-id(key('employees-by-department', department)[1])]
{% endhighlight %}

 * Посмотреть, сколько узлов включает в себя результат объединения двух узлов:
 один или два - узлы не могут повторяться во множестве, так что если там
 только один узел, то они должны быть одним и тем же узлом:

{% highlight xml %}
employee[count(.|key('employees-by-department', department)[1]) = 1]
{% endhighlight %}

Однажды определив группы, вы можете отсортировать их так, как вам нравится.
Также вы можете отсортировать узлы в рамках группы так, как вы хотите. Вот
шаблон, который создаёт результат, который мы описали, из XML, полученного из
базы данных:

{% highlight xml %}
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method = "html" encoding="Windows-1252" />
  <xsl:key name = "employees-by-department" match ="employee" use = "department" />

  <xsl:template match="data">
    <html>
      <head></head>
      <body>
        <xsl:for-each select = "employee[count(.|key('employees-bydepartment',
department)[1])=1]">
          <xsl:sort select="department" />
          <b><u><xsl:value-of select="department" /></u></b><br/>
            <xsl:for-each select="key('employees-bydepartment',
department)">
              <xsl:sort select="name"/>
              <xsl:value-of select="name" /><br/>
            </xsl:for-each>
          </xsl:for-each>
        </body>
      </html>
  </xsl:template>

</xsl:stylesheet>
{% endhighlight %}

Метод Мюнха обычно лучше использовать для группировки узлов из XML-документа,
потому что он не подразумевает прохождения через большое число узлов, и поэтому
он более эффективен. Он особенно полезен, когда у вас есть плоская выдача из
базы данных, например, которую вам нужно преобразовать в какую-нибудь
иерархичную структуру. Он может быть применён в любой ситуации, где нужно
группировать узлы согласно их свойствам, которые можно получить через
XPath.<br/>
Обратная сторона состоит в том, что метод Мюнха будет работать только с
XSLT-процессором, поддерживающим ключи. Вдобавок, использование ключей может
быть достаточно затратным по памяти, потому что все узлы и их ключи хранятся в
памяти. Наконец, может быть трудно использовать ключи, если узлы, которые вы
хотите сгруппировать, получены из разных подключенных источников.

##Использование xsl:import
Используйте `<xsl:import>`, чтобы подключить общие, основные правила в
преобразование, задуманное для определённых трансформаций. Если можете, не
импортируйте больше шаблонов, чем вам нужно.

##Использование статического HTML
Для любых "неизменных" порций html на странице (таких как шапка, подвал,
элементы навигации) определённо более эффективно хранить фрагменты как внешние
xml-файлы и копировать их в результирующее дерево используя `xsl:copy-of` и
функцию `document()`, чем использовать именованные шаблоны или `xsl:import`.

##Разница между call и apply templates
Call-template, в отличие от aplly-templates, не меняет контекстный (текущий)
узел. И атрибут select имеет значение только в aplly-templates, и не имеет в
call-template.

##Повторное использование кода и рефакторинг
Проблема с использованием одного темплейта с множеством условий - это то, что
очень быстро делает код отвратительным, нечитаемым и неподддерживаемым. Проблема
многих шаблонов состоит в том, что вы часто дублируете код. Золотая середина -
использовать много шаблонов, а при необходимости повторить код - вызывать
именованные шаблоны, иногда с параметрами, если имеют место небольшие изменения,
которые должны быть учтены. Именованные шаблоны похожи на подпрограммы или
приватные методы.

Например. Допустим, вы хотите обработать элементы item, имея один шаблон для
узлов со значением атрибута type - 'Book', один - для 'CD', и один для всех
остальных.

{% highlight xml %}
<xsl:template match="item[@type='Book']"/>
<xsl:template match="item[@type='CD']"/>
<xsl:template match="item"/>
{% endhighlight %}

И они переопределят шаблон, привязанный к "*" (любой элемент). Шаблоны с более
точной адресацией будут иметь более высокий приоритет для сопоставления.

##Автоматизируйте XSL-документацию
Программисты обычно ненавидят документацию и поэтому обычно не пишут её.
Javadocs в Java даёт большое утешение программистскому сообществу, обеспечивая
способ автоматически генерировать документацию. Есть похожий инструмент, который
написан для XSL и называется xsldoc. Его можно бесплатно скачать на
[www.xsldoc.org](http://www.xsldoc.org/).<br/>
Этот инструмент обеспечит автоматизированный, стандартизированный и надежный
способ создания документации о ваших XSL-файлах, и поскольку он управляется из
командной строки, то может стать частью процесса сборки.

##Не изобретайте велосипед, используйте XSLT-библиотеку
XSLT-библиотека - это open source репозиторий XSL-шаблонов, которые были
написаны и проверены. В библиотеке множество шаблонов для работы со строками,
датами, обработки узлов и т.п., что может быть эффективно использовано в ваших
xsl-файлах. Так что сэкономьте своё время с этой библиотекой. Её можно
посмотреть по адресу [http://xsltsl.sourceforge.net](http://xsltsl.sourceforge.net).

##Уменьшайте размер ваших HTML-документов
Уменьшайте размер вашего HTML, используя `indent="no"` в теге
`<xsl:output/>`. Этот атрибут сообщает XSLT-процессору не делать отступы в
HTML-документе, что делает файлы меньше и они грузятся быстрее.

{% highlight xml %}
<xsl:output method="html" indent="no"/>
{% endhighlight %}
