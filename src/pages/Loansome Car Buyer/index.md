---
title: Loansome Car Buyer
date: "2018-09-28T23:24:13.284Z"
---
**Problem Number:**  [10114](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&category=13&problem=1055)

**Solution:**     

    #include <iostream>
    #include <map>
    using namespace std;
    int main() {
	int loan_duration, no_rec,month;
	double down_payment, loan,percentage; 

	while (true) {
		cin >> loan_duration >> down_payment >> loan >> no_rec;
		if (loan_duration < 0)
			break;
			
		map <int, double> month_percentage;
		
		while (no_rec--) {
			cin >> month >> percentage;
			month_percentage[month]=percentage;
		}
		
		
		int now = 0;
		double month_payment = loan / loan_duration;
		double car_worth = (loan + down_payment) * (1 - month_percentage[0]);
		double current_loan = loan;
		
		double temp=month_percentage[0];
		
		while (car_worth < current_loan) {
			now++;
			current_loan -= month_payment;
			if (month_percentage.find(now) == month_percentage.end())
				car_worth = car_worth * (1-temp);
			else
			{
				temp=month_percentage[now];
				car_worth = car_worth * (1-temp);
			}		
		}		
		cout << now << " month";
		if (now != 1)
			cout << "s";
		cout << endl;		
	}
	return 0;
	}
