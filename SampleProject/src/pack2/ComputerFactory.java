package pack2;

import pack1.Computer;
import pack1.PC;
import pack1.Server;

public class ComputerFactory {
	public static Computer getComputer(String type, String ram, String hdd, String cpu){
		if("PC".equalsIgnoreCase(type)) return new PC(ram, hdd, cpu);
		else if("Server".equalsIgnoreCase(type)) return new Server(ram, hdd, cpu);
		return null;
	}

}
