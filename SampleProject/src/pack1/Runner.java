package pack1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Runner {

	public static void main(String[] args) {
		
		List<Laptop> laps = new ArrayList<>();
		laps.add(new Laptop("Dell", 1, 700));
		laps.add(new Laptop("Acer", 2, 800));
		laps.add(new Laptop("Apple", 3, 900));
		Collections.sort(laps);
		for(Laptop l : laps) {
			System.out.println(l);
		}

	}

}
