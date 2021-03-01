Set objFso = CreateObject("Scripting.FileSystemObject")
Set Folder = objFSO.GetFolder("A:\Luminet\Automation\Sikuli\src\Demo\node-sikuli-master\node-sikuli-master\Image\ThemeXuan\TurboOddEven")

For Each File In Folder.Files
    sNewFile = File.Name
    sNewFile = Replace(sNewFile,"Small","Odd")
    if (sNewFile<>File.Name) then 
        File.Move(File.ParentFolder+"\"+sNewFile)
    end if

Next