# Security & Privacy Guide

## Data Storage

This application stores all data **locally** in the user's browser using localStorage. No data is:
- Sent to external servers
- Transmitted over the network
- Stored in cloud services
- Shared with third parties

## What's Stored Locally

- Game progress (completed levels)
- Unlocked rewards
- Achievements
- Music preferences (volume, enabled/disabled)

## Personal Content

All personal photos, messages, and memories are:
- Bundled with the application
- Stored in the `public/` directory
- Accessible only to the person running the application
- Not uploaded anywhere unless you explicitly deploy the app

## Deployment Considerations

If you plan to deploy this online:

1. **Use a private hosting service** or password-protect the deployment
2. **Don't commit personal photos** to public repositories
3. **Review file names** - ensure they don't contain sensitive information
4. **Consider using environment variables** for any configurable secrets (though none are currently used)

## Best Practices

- Keep personal photos in a private directory
- Use `.gitignore` to exclude personal content from version control
- Review the deployed site before sharing the URL
- Consider adding password protection if hosting publicly

## Current Security Measures

✅ No external API calls
✅ No data collection
✅ No analytics or tracking
✅ All data stored client-side only
✅ No third-party scripts
✅ No cookies (except localStorage for game state)

