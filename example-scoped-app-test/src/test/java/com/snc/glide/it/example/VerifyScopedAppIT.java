package  com.snc.glide.it.example;

import org.junit.*;

import com.glide.script.GlideRecord;
import com.snc.glide.it.rules.GlideEnvironment;
import com.snc.glide.it.annotations.*;

@WithScopedApp(value = {"example-scoped-app"}, loadDemoData = true)
public class VerifyScopedAppIT {

	private static final String SCOPE = "scope";
	private static final String SYS_STORE_APP = "sys_store_app";
	private static final String NAME = "name";

	@ClassRule
	public static final GlideEnvironment fEnv = new GlideEnvironment();

	@Test
	public void test() {
		GlideRecord apps = new GlideRecord(SYS_STORE_APP);
		apps.addQuery(NAME, "Example Scoped App");
		apps.addQuery(SCOPE, "sn_exampleapp");
		apps.query();

		Assert.assertTrue("App is not installed", apps.hasNext());
	}
}