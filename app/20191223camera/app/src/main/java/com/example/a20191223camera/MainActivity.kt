package com.example.a20191223camera

import android.R.attr
import android.app.Activity
import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.isVisible
import kotlinx.android.synthetic.main.activity_main.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        camerabt.setOnClickListener {
            showCamerBtn(view = imageView)
        }
    }

    fun showCamerBtn(view: View?) {
        var intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        startActivityForResult(intent, 1)
    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)


        if(resultCode == Activity.RESULT_OK)
        {
            val bitmap : Bitmap
            bitmap = data?.getParcelableExtra("data") as Bitmap
            imageView.setImageBitmap(bitmap)
            //val bitmap = data!!.getParcelableArrayExtra("data") as Bitmap
            //imageView2.setImageBitmap(bitmap)
        }
    }
}

//import android.R.attr
//import android.app.Activity
//import android.content.Intent
//import android.graphics.Bitmap
//import android.os.Bundle
//import android.provider.MediaStore
//import android.view.View
//import android.widget.Button
//import android.widget.ImageView
//import android.widget.Toast
//import androidx.appcompat.app.AppCompatActivity
//import androidx.core.view.isVisible
//import kotlinx.android.synthetic.main.activity_main.*
//
//
//class MainActivity : AppCompatActivity() {
//    val Camera_requset_code=0
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main)
//
//        camerabt.setOnClickListener {
//            val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
//            if (intent.resolveActivity(packageManager) != null) {
//                startActivityForResult(intent, Camera_requset_code)
//            }
//        }
//    }
//
//
//    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
//        super.onActivityResult(requestCode, resultCode, data)
//        when(requestCode){
//            Camera_requset_code -> {
//                if(resultCode == Activity.RESULT_OK && data != null){
//                    imageView.setImageBitmap(data.extras?.get("data") as Bitmap)
//                }
//            }
//            else -> {
//                Toast.makeText(this, "Unrecognized request code",  Toast.LENGTH_SHORT).show()
//
//            }
//        }
//    }
//}
