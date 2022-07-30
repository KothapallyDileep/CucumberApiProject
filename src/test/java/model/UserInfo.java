package model;

public class UserInfo {
	private String name;
	private String job;

	/**
	 * No args constructor for use in serialization
	 *
	 */
	public UserInfo() {
	}

	/**
	 *
	 * @param petId
	 * @param id
	 */
	public UserInfo(String name, String job) {
		super();
		this.name = name;
		this.job = job;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

}
