`bubblewrap init --manifest="https://create-google-app.vercel.app/manifest.webmanifest" --directory="bubblewrap"`
[//]: # (and write the following after the next two lines)
[//]: # (android.keystore)
[//]: # (android)

```
passord
passord
Kyrie Eleison
Eleison
Jus
no
```
`cd bubblewrap`

[//]: # (Loop START)
[//]: # (Edit "gradle.properties" and comment out line 9:)
[//]: # (org.gradle.jvmargs=-Xmx1536m) 

`bubblewrap build`

# Start here on update
[//]: # (next time)
`bubblewrap update`

[//]: # (Loop END -> back to Edit "gradle.properties")

## The second process
Do this always after the first release:
- `bubblewrap update`
- Edit `gradle.properties` and comment out line 9.
- `bubblewrap build`
- Go to `Google Play Console` (on web) and create a new release and upload the new aab-packet and follow the instructions in the Console.