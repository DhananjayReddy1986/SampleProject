package pack1;

public abstract class Computer {
	
	public abstract String getRam();
	public abstract String getHDD();
	public abstract String getCPU();
	
	@Override
	public String toString() {
		return "Computer [getRam()=" + this.getRam() + ", getHDD()=" + this.getHDD() + ", getCPU()=" + this.getCPU() + "]";
	}

}

