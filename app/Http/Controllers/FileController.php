<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FileUpload;

use File;

use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    //
    public function index()
    {
        $files = FileUpload::all();
        
        return response()->json($files);
    }

    public function upload(Request $request)
    {

        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
         ]);
 
        $fileUploadTable = new FileUpload();
 
         try{
            if($request->file("file")) {

                $fileUpload = $request->file("file");
    
                $fileUpload->move(public_path() . "/uploads", $request->file->getClientOriginalName());
            
                $fileUploadTable->name = $request->file->getClientOriginalName();
                $fileUploadTable->path = "/uploads/" . $request->file->getClientOriginalName();
                $fileUploadTable->save();
    
                return response()->json(['message'=>'File Uploaded Successfully.', "file"=>$fileUploadTable]);
            }
         } catch (\Exception $e) {
            
            return response()->json(['message'=> "Upload Failed"]);
         }
    }

    public function deleteFile($id) {

        $file = FileUpload::find($id);

        // trường hợp người dùng mở 2 tab và xóa file bên tab 2, sau đó về tab 1 xóa lại 
        // file đó
        if($file == null){
            return response()->json(['message'=> "Please reload the page"]);
        }

        $fileForResponse = FileUpload::find($id);

        if(file_exists(public_path() . $file->path)){

            File::delete(public_path() . $file->path);
            FileUpload::where("id", $file->id)->delete();

            // xóa lun những record có tên file trùng với tên file được yêu cầu xóa
            FileUpload::where("name", $file->name)->delete();

            return response()->json(['message'=> "Delete File Successfull", "file"=>$fileForResponse]);
        }

        return response()->json(['message'=> "Delete File Failed", "file"=>$fileForResponse]);

    }
}