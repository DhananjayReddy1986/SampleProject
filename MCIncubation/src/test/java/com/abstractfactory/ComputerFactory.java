package com.abstractfactory;

public class ComputerFactory {
	public static Customer getCustomer(ComputerAbstractFactory factory) {
		return factory.createComputer();
	}

}
