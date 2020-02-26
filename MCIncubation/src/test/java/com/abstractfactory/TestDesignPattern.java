package com.abstractfactory;

public class TestDesignPattern {

	public static void main(String[] args) {
		testAbstractDesignPattern();
	}
	
	public static void testAbstractDesignPattern() {
		Computer pc = ComputerFactory.getCustomer(new PCFactory("2 GB","500 GB","2.4 GHz"));
	}

}
