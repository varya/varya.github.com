---

title: subtxt

date: 2015-02-25

layout: post

---
Often problem when we operate a string is to get a subset of it. In JavaScript the solution is as simple as
`str.substring(from, to)` (I consider the case when `from` and `to` are known). But when operating multiline texts
it may happen that breakpoint's positions are known in 2-dimentions format, like `{ line: 5, column: 24 }`. How would
you get a subtext between such positions in JavaScript?
<excerpt/>
YYY
