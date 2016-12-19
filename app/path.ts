export class PathSetting{
    public static get PathToBackend(): string{
        let localhostone = "http://localhost:8080";
        let localhosttwo = "http://lcai01.phage.bcgsc.ca:8080";
        let bioqcdev01 = "http://Bioqcdev01.bcgsc.ca:8080";
        let bioqcweb02 = "http://Bioqcweb02.bcgsc.ca:8080";
        return bioqcdev01;
    }
}
