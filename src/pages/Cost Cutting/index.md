---
title: Cost Cutting
date: "2018-09-27T22:22:13.284Z"
---
**Problem Number:**  [11727](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=117&page=show_problem&problem=2827)


**Solution:**     

     #include <iostream>
     using namespace std;
     int main() 
     {
	int test,a,b,c,temp,i=1;	
	cin>>test;
	
	while(test>0)
	{
		cin>>a>>b>>c;
		
		if(a>b && a>c)
		{
			if(b>c)
				cout<<"Case "<<i<<": "<<b<<"\n";
			else
				cout<<"Case "<<i<<": "<<c<<"\n";	
			
		}
		else if(b>a && b>c)
		{
			if(a>c)
				cout<<"Case "<<i<<": "<<a<<"\n";
			else
				cout<<"Case "<<i<<": "<<c<<"\n";
		}
		else
		{
			if(a>b)
				cout<<"Case "<<i<<": "<<a<<"\n";
			else
				cout<<"Case "<<i<<": "<<b<<"\n";
		}
		i++;
		test--;
	}
	return 0;
	}

