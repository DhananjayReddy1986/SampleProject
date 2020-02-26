package searchingandsorting;

public class SelectionSort {

	public static void main(String[] args) {
		int arr[] = { 10, 50, 5, 6, 1, -32 };
		selectionSort(arr);
		//sort(arr);
		printArray(arr);

	}

	public static void selectionSort(int arr[]) {
		int n = arr.length;
		for (int i = 0; i < n-1; i++) {
			int index = i; // int j; 
			for (int j = i + 1; j < n; j++) {
			if (arr[j] < arr[index]) {
				index = j;
			}
				int smallerNumber = arr[index];
				arr[index] = arr[i];
				arr[i] = smallerNumber;
			}
		}
	} // printArray(arr); }

	public static void printArray(int arr[]) {
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}

	public static void sort(int[] arr) {

		int n = arr.length;

		for (int i = 0; i < n; i++) {
			// int minEle = arr[i];

			for (int j = i + 1; j < n; j++) {
				if (arr[j] < arr[i]) {
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}

}
