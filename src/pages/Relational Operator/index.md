---
title: Relational Operator
date: "2018-09-27T22:12:03.284Z"
---
**Problem Number:** [11172](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=23&page=show_problem&problem=2113)







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


