package pack3;

import pack1.Computer;
import pack2.ComputerFactory;

public class TestFactory {

	public static void main(String[] args) {
		
		Computer pc = ComputerFactory.getComputer("PC", "2 GB", "500 GB", "2.4 GHZ");
		Computer server = ComputerFactory.getComputer("Server", "3 GB", "700 GB", "3.4 GHZ");
		System.out.println("Factory PC Config::"+pc);
		System.out.println("Factory Server Config::"+server);

	}

}
