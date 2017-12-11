# Steam WebAPI Client

This is [yet another](https://www.npmjs.com/search?q=steam-web-api2) node.js module for the
[Steam WebAPI](https://lab.xpaw.me/steam_api_documentation.html). I made it for myself because I'm sure none of the
other modules are any good, but anyone is of course welcome to use it. Don't expect too many updates outside of fixing
stuff.

It detects and handles errors from the `X-eresult` and `X-error_message` headers. It also requests gzip compression for
responses.

# Constructor

The constructor takes two arguments: `key` and `localAddress`.

```js
const SteamWebAPI = require('steam-web-api2');
var api = new SteamWebAPI("yourapikey", "192.168.0.5");
```

The first argument is your [API key](https://steamcommunity.com/dev/apikey). The second is the local IP address you want
to make your requests from. Both are optional. If you don't provide an API key you can only use the methods that
don't require one.

You can change your API key at any time by assigning it to the `key` property. Same goes for `localAddress` with the
`localAddress` property.

# Methods

### Calling methods direclty

You can call methods like 
```javascript
api.IEconService.GetTradeHistory({
    steamid: 76561198194871150
})```

### Interfaces
```json
{
  "IBroadcastService": [
      "PostGameDataFrame"
  ],
  "ICheatReportingService": [
      "ReportPlayerCheating",
      "RequestPlayerGameBan",
      "RemovePlayerGameBan",
      "GetCheatingReports",
      "RequestVacStatusForUser",
      "StartSecureMultiplayerSession",
      "EndSecureMultiplayerSession",
      "ReportCheatData"
  ],
  "IEconMarketService": [
      "GetMarketEligibility",
      "CancelAppListingsForUser",
      "GetAssetID",
      "GetPopular"
  ],
  "IEconService": [
      "GetTradeHistory",
      "FlushInventoryCache",
      "FlushAssetAppearanceCache",
      "FlushContextCache",
      "GetTradeOffers",
      "GetTradeOffer",
      "GetTradeOffersSummary",
      "DeclineTradeOffer",
      "CancelTradeOffer"
  ],
  "IGameInventory": [
      "GetHistoryCommandDetails",
      "GetUserHistory",
      "HistoryExecuteCommands",
      "SupportGetAssetHistory"
  ],
  "IGameNotificationsService": [
      "CreateSession",
      "UpdateSession",
      "EnumerateSessionsForApp",
      "GetSessionDetailsForApp",
      "RequestNotifications",
      "DeleteSession",
      "DeleteSessionBatch"
  ],
  "IGameServersService": [
      "GetAccountList",
      "CreateAccount",
      "SetMemo",
      "ResetLoginToken",
      "DeleteAccount",
      "GetAccountPublicInfo",
      "QueryLoginToken",
      "SetBanStatus",
      "GetServerSteamIDsByIP",
      "GetServerIPsBySteamID"
  ],
  "IInventoryService": [
      "AddItem",
      "AddPromoItem",
      "ConsumeItem",
      "ExchangeItem",
      "GetInventory",
      "GetItemDefs",
      "GetPriceSheet",
      "Consolidate",
      "GetQuantity"
  ],
  "IPlayerService": [
      "RecordOfflinePlaytime",
      "GetRecentlyPlayedGames",
      "GetOwnedGames",
      "GetSteamLevel",
      "GetBadges",
      "GetCommunityBadgeProgress",
      "IsPlayingSharedGame"
  ],
  "IPublishedFileService": [
      "QueryFiles",
      "SetDeveloperMetadata",
      "UpdateTags"
  ],
  "ISteamApps": [
      "GetAppBetas",
      "GetAppBuilds",
      "GetAppDepotVersions",
      "GetAppList",
      "GetCheatingReports",
      "GetPlayersBanned",
      "GetServerList",
      "GetServersAtAddress",
      "SetAppBuildLive",
      "UpToDateCheck"
  ],
  "ISteamCommunity": [
      "ReportAbuse"
  ],
  "ISteamEconomy": [
      "CanTrade",
      "FinalizeAssetTransaction",
      "GetAssetClassInfo",
      "GetAssetPrices",
      "GetExportedAssetsForUser",
      "GetMarketPrices",
      "StartAssetTransaction",
      "StartTrade"
  ],
  "ISteamGameServerStats": [
      "GetGameServerPlayerStatsForGame"
  ],
  "ISteamLeaderboards": [
      "DeleteLeaderboard",
      "FindOrCreateLeaderboard",
      "GetLeaderboardEntries",
      "GetLeaderboardsForGame",
      "ResetLeaderboard",
      "SetLeaderboardScore"
  ],
  "ISteamMicroTxn": [
      "AdjustAgreement",
      "CancelAgreement",
      "FinalizeTxn",
      "GetReport",
      "GetUserAgreementInfo",
      "GetUserInfo",
      "InitTxn",
      "ProcessAgreement",
      "QueryTxn",
      "RefundTxn"
  ],
  "ISteamMicroTxnSandbox": [
      "AdjustAgreement",
      "CancelAgreement",
      "FinalizeTxn",
      "GetReport",
      "GetUserAgreementInfo",
      "GetUserInfo",
      "InitTxn",
      "ProcessAgreement",
      "QueryTxn",
      "RefundTxn"
  ],
  "ISteamNews": [
      "GetNewsForApp",
      "GetNewsForAppAuthed"
  ],
  "ISteamPublishedItemSearch": [
      "RankedByPublicationOrder",
      "RankedByTrend",
      "RankedByVote",
      "ResultSetSummary"
  ],
  "ISteamPublishedItemVoting": [
      "ItemVoteSummary",
      "UserVoteSummary"
  ],
  "ISteamRemoteStorage": [
      "EnumerateUserPublishedFiles",
      "EnumerateUserSubscribedFiles",
      "GetCollectionDetails",
      "GetPublishedFileDetails",
      "GetUGCFileDetails",
      "SetUGCUsedByGC",
      "SubscribePublishedFile",
      "UnsubscribePublishedFile"
  ],
  "ISteamUserAuth": [
      "AuthenticateUser",
      "AuthenticateUserTicket"
  ],
  "ISteamUser": [
      "CheckAppOwnership",
      "GetAppPriceInfo",
      "GetFriendList",
      "GetPlayerBans",
      "GetPlayerSummaries",
      "GetPublisherAppOwnership",
      "GetPublisherAppOwnershipChanges",
      "GetUserGroupList",
      "GrantPackage",
      "ResolveVanityURL"
  ],
  "ISteamUserStats": [
      "GetGlobalAchievementPercentagesForApp",
      "GetGlobalStatsForGame",
      "GetNumberOfCurrentPlayers",
      "GetPlayerAchievements",
      "GetSchemaForGame",
      "GetUserStatsForGame",
      "SetUserStatsForGame"
  ],
  "ISteamWebAPIUtil": [
      "GetServerInfo",
      "GetSupportedAPIList"
  ],
  "IWorkshopService": [
      "SetItemPaymentRules",
      "GetFinalizedContributors",
      "GetItemDailyRevenue",
      "PopulateItemDescriptions"
  ]
}
```

### get(iface, method, version[, input])
- `iface` - The WebAPI interface that you want to use. The leading "I" is optional.
    - For example, `IGameServersService` or `SteamUser`.
- `method` - The WebAPI method that you want to use.
    - For example, `GetPlayerSummaries`.
- `version` - The numeric version of the method you want to use.
    - For example, `1`.
- `input` - Optional. An object containing the parameters you want to pass to this request.
    - You shouldn't provide `key` or `format`, as these will be filled automatically.
    - Array inputs (e.g. `input[0]=foo&input[1]=bar`) should be passed as JavaScript arrays. They will be serialized accordingly.

Returns `promise`

Performs a GET request to a method.

### post(iface, method, version[, input])

Same as [`get`](#getiface-method-version-input-callback) except with a POST request.

# Failure

On failure, you'll get back an `Error` object with the following properties:

- `statusCode` - The HTTP status code of the response. This may be `200` if an error was detected elsewhere.
- `eresult` - Only if Steam sends back an `X-eresult` header, this will be an [EResult](https://steamerrors.com) value.
- `message` - A string describing the error that occurred. These are the conditions that are checked, in order from top to bottom:
    - If `X-eresult` is returned, is not `1`, and `X-error_message` is returned, then this is the value of `X-error_message`; otherwise,
    - If `X-eresult` is returned and is not `1`, then this is the string name of the EResult value (for example, `NoMatch`); otherwise,
    - If the HTTP status code is not 200, this is the HTTP status message (for example, `Not Found` or `Unauthorized`); otherwise,
    - If the received response wasn't valid JSON, then this is `Malformed response`

# Response

Response data is parsed as JSON. If the top-level object contains exactly one property named `response`, then the value
of the `response` property is returned. Otherwise, the parsed JSON is returned as-is.
