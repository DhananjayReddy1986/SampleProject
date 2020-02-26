package com.singleton;

//Approach 1 :

public class SingletonDesignPattern {
	private static SingletonDesignPattern singleton = new SingletonDesignPattern();

	private SingletonDesignPattern() {

	}

	public static SingletonDesignPattern getInstance() {
		return singleton;
	}
}

//Approach 2 

/*
 * public class SingletonDesignPattern { private static SingletonDesignPattern
 * singleton = null;
 * 
 * private SingletonDesignPattern() {
 * 
 * }
 * 
 * public SingletonDesignPattern getInstance() { if (singleton == null) { return
 * new SingletonDesignPattern(); } else { return singleton; } } }
 */
