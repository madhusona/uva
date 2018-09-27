---
title: Division of Nlogonia
date: "2018-09-27T22:12:13.284Z"
---

**Problem Number:** [11498](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=26&page=show_problem&problem=2493) 



**Solution:**     

     #include <iostream>    
    using namespace std;    
    int main() 
    {
        int n, px, py, x, y;
        cin >> n;
        while (n != 0) 
        {
	        cin >> px >> py;
	        while (n--) 
	        {
		       cin >> x >> y;
		       if (x == px || y == py)    
				    cout << "divisa";
			   else if (x < px && y > py)
					cout << "NO";
			   else if (x > px && y > py)
				    cout << "NE";
			   else if (x > px && y < py)
					cout << "SE";
			   else if (x < px && y < py)
					cout << "SO";
    
			   cout << endl;
		    }
		    cin >> n;
	}
	return 0;
	}

