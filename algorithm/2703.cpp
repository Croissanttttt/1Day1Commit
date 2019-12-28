#include<iostream>
#include<string>
using namespace std;
int main() {
	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int k = 0;
		string q, key;
		if (i == 0) { getline(cin, q); }
		getline(cin, q);
		getline(cin, key);
		char ans[q.length()];
		while (q.length() > k) {
			for (int j = 0; j < 26; j++) {
				if (q[k] == j + 65) {
					ans[k] = key[j];
					break;
				}
				if (q[k] == 32) {
					ans[k] = ' ';
					break;
				}
			}
			k++;
		}
		for (int j = 0; j < q.length(); j++) {
			if (ans[j] == -52) { break; }
			cout << ans[j];
		}
		cout << '\n';
	}

	return 0;
}
