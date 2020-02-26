package programs;

/*public class CountOfCharacters {
    public static void main(String[] args) {
    	CountOfCharacters cc = new CountOfCharacters();
          cc.countChars("I am an Indian");
    }
    
    public void countChars(String str){
        char[] strArr;
        do{
            strArr = str.	();
            char ch = strArr[0];
            int count = 1;
            for(int i = 1; i < strArr.length; i++){
                if(ch == strArr[i]){
                    count++;
                }
            }
            // We don't need to count spaces
            if(((ch != ' ') && (ch != '\t'))){
                System.out.println(ch + " - " + count);
            }
            // replace all occurrence of the character 
            // which is already iterated and counted
            str = str.replace(""+ch, "");
        }while(strArr.length > 1);    
    }
}
*/

/*OUTPUT : 
I - 2
a - 3
m - 1
n - 3
d - 1
i - 1*/

/*public class CountOfCharacters {
    public static void main(String[] args) {
    	CountOfCharacters cc = new CountOfCharacters();
          cc.countChars("I am an Indian");
    }
    
    public void countChars(String str){
        //char[] strArr;
        do{
            //strArr = str.toCharArray();
            char ch = str.charAt(0);
            int count = 1;
            for(int i = 1; i < str.length(); i++){
                if(ch == str.charAt(i)){
                    count++;
                }
            }
            // We don't need to count spaces
            if(((ch != ' ') && (ch != '\t'))){
                System.out.println(ch + " - " + count);
            }
            // replace all occurrence of the character 
            // which is already iterated and counted
            str = str.replace(""+ch, "");
        }while(str.length() >= 1);    
    }
}*/




