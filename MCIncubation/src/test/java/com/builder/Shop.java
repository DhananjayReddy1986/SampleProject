package com.builder;

public class Shop {

	public static void main(String[] args) {
		/*
		 * Phone p = new Phone("Androi",2,"Qualcom",5,"3mhz"); System.out.println(p);
		 */
		Phone p = new PhoneBuilder().setOs("ANDROID").setRam(2).getPhone();
		System.out.println(p);
	}

}
