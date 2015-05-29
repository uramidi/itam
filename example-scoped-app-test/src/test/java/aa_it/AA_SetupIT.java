package aa_it;

import com.snc.glide.it.util.AA_SeleniumSetup;

/**
 * This is a standard setup for an IT project
 * 
 * It does install a glide instance (from the latest glide-dist build), restores
 * a zboot (from the latest glide-db-dump) and starts it.
 * 
 * This runs in the maven integration-test phase (you can tell from the IT
 * suffix), and since those run in alphabetical order the aa_it.AA_Setup make
 * sure it's the first test to run.
 * 
 * This example extends AA_SeleniumSetup which does extra magic to make sure the
 * selenium tests can also run on headless machines (jenkins). If no test in
 * your project is using selenium, you can extend AA_Setup instead.
 */
public class AA_SetupIT extends AA_SeleniumSetup {
	public AA_SetupIT() {
		super("example-scoped-app-test");
	}
}
