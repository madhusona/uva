webpackJsonp([45649654565168],{514:function(t,n){t.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Blog",author:"Kyle Mathews"}},markdownRemark:{id:"C:/Users/admin/Downloads/uva-master/src/pages/Loansome Car Buyer/index.md absPath of file >>> MarkdownRemark",html:'<p><strong>Problem Number:</strong>  <a href="https://uva.onlinejudge.org/index.php?option=com_onlinejudge&#x26;Itemid=8&#x26;page=show_problem&#x26;category=13&#x26;problem=1055">10114</a></p>\n<p><strong>Solution:</strong>     </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">#include &lt;iostream&gt;\n#include &lt;map&gt;\nusing namespace std;\nint main() {\nint loan_duration, no_rec,month;\ndouble down_payment, loan,percentage; \n\nwhile (true) {\n\tcin &gt;&gt; loan_duration &gt;&gt; down_payment &gt;&gt; loan &gt;&gt; no_rec;\n\tif (loan_duration &lt; 0)\n\t\tbreak;\n\t\t\n\tmap &lt;int, double&gt; month_percentage;\n\t\n\twhile (no_rec--) {\n\t\tcin &gt;&gt; month &gt;&gt; percentage;\n\t\tmonth_percentage[month]=percentage;\n\t}\n\t\n\t\n\tint now = 0;\n\tdouble month_payment = loan / loan_duration;\n\tdouble car_worth = (loan + down_payment) * (1 - month_percentage[0]);\n\tdouble current_loan = loan;\n\t\n\tdouble temp=month_percentage[0];\n\t\n\twhile (car_worth &lt; current_loan) {\n\t\tnow++;\n\t\tcurrent_loan -= month_payment;\n\t\tif (month_percentage.find(now) == month_percentage.end())\n\t\t\tcar_worth = car_worth * (1-temp);\n\t\telse\n\t\t{\n\t\t\ttemp=month_percentage[now];\n\t\t\tcar_worth = car_worth * (1-temp);\n\t\t}\t\t\n\t}\t\t\n\tcout &lt;&lt; now &lt;&lt; &quot; month&quot;;\n\tif (now != 1)\n\t\tcout &lt;&lt; &quot;s&quot;;\n\tcout &lt;&lt; endl;\t\t\n}\nreturn 0;\n}</code></pre>\n      </div>',frontmatter:{title:"Loansome Car Buyer",date:"September 28, 2018"}}},pathContext:{slug:"/Loansome Car Buyer/",previous:{fields:{slug:"/Cost Cutting/"},frontmatter:{title:"Cost Cutting"}},next:null}}}});
//# sourceMappingURL=path---loansome-car-buyer-085fc8eb15d189747518.js.map