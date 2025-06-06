export declare function geocode(query: string): Promise<{
    latitude: number;
    longitude: number;
    displayName: any;
    raw: any;
}>;
export declare function reverseGeocode(lat: number, lon: number): Promise<{
    address: any;
    raw: any;
}>;
//# sourceMappingURL=openStreetMap.d.ts.map