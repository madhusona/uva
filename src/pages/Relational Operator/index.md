---
title: Relational Operator
date: "2018-09-27T22:12:03.284Z"
---
**Problem Number:** 11172
**Link:** [https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=23&page=show_problem&problem=2113](---%20title:%20Relational%20Operator%20date:%20%222018-09-27T22:12:03.284Z%22%20---%20Problem%20Num:%2011172%20Link:%20https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=23&page=show_problem&problem=2113%20%20Solution)

**Solution:**  

    #include <iostream>    
    using namespace std;
        
    int main() 
    {
        int n, x,y;
        cin >> n;
	    while(n--)
	    {
	        cin >> x >> y;
	        if(x<y) cout << "<";
	        else if(x>y) cout << ">";
	        else cout << "=";
	        cout << endl;
        }
        return 0;
    }


