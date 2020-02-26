SET Features="@target/rerun.txt"
SET Glue="glue"
SET Plugin="json:target/cucumber.json"
SET Tags="@tag112"


mvn verify -Dcucumber.options=%Features%"--tags "%Tags%"--glue "%Glue%"--plugin "%Plugin%" --no-dry-run --monochrome"
::mvn clean verify -Dcucumber.options=%Features% --dry-run" --tags "%Tags%"--glue "%Glue%"--plugin "%Plugin%


