package com.factory;

public class OperatingSystemFactory {

	public OS getInstance(String os) {
		if (os.equals("Android")) {
			return new Android();
		} else if (os.equals("Iphone")) {
			return new Iphone();
		} else if (os.equals("Windows")) {
			return new Windows();
		} else {
			return null;
		}

	}

}
