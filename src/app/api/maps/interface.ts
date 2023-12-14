export interface Maps {
    uuid: string,
    displayName: string,
    narrativeDescription: string,
    displayIcon: string,
    splash: string,
    assetPath: string,
    callouts: [
        {
            regionName: string,
            superRegionName: string
        }
    ]
}