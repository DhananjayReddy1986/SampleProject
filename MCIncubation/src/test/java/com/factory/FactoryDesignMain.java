
package com.factory;

public class FactoryDesignMain {

	public static void main(String[] args) {
		OperatingSystemFactory fdp = new OperatingSystemFactory();
		OS object = fdp.getInstance("Android");
		System.out.println("....");
		object.spec();
	}

}
