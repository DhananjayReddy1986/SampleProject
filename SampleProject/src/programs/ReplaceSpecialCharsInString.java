package programs;

public class ReplaceSpecialCharsInString {

	public static void main(String[] args) {
		
		StringBuffer sb = new StringBuffer();
		StringBuilder sbui = new StringBuilder();
		
		// remove all the special characters a part of alpha numeric characters
		String text = "This - word ! has \\ /allot # of % special % characters";
		text = text.replaceAll("[^a-zA-Z0-9]", "");
		System.out.println(text);
		 
		// remove all the special characters a part of alpha numeric characters and space
		String text1 = "This - word ! has \\ /allot # of % special % characters";
		text1 = text1.replaceAll("[^a-zA-Z0-9 ]", "");
		System.out.println(text1);
		 
		// remove all the special characters a part of alpha numeric characters, space and hyphen.
		// Note down the blank space and hyphen just before the ]
		String text2 = "This - word ! has \\ /allot # of % special % characters";
		text2 = text2.replaceAll("[^a-zA-Z0-9 -]", "");
		System.out.println(text2);

	}

}
