package Vladimir_Mikic_II_532015_APRSP.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Vladimir_Mikic_II_532015_APRSP.jpa.Liga;
import Vladimir_Mikic_II_532015_APRSP.reps.LigaRepository;

@RestController
public class LigaRestController {
	
	@Autowired
	private LigaRepository ligaRepository;
	
	@CrossOrigin
	@GetMapping ("liga")
	public Collection<Liga>getAll(){
		return ligaRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("liga/{id}")
	public Liga getOne (@PathVariable("id") Integer id) {
		return ligaRepository.getOne(id);
	}
	
	@CrossOrigin
	@PostMapping ("liga")
	public ResponseEntity<HttpStatus> addLiga (@RequestBody Liga liga){
		ligaRepository.save(liga);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping ("liga/{id}")
	public ResponseEntity<HttpStatus> updateLiga (@RequestBody Liga liga, @PathVariable ("id") Integer id){
		if (ligaRepository.existsById(id)) {
			liga.setId(id);
			ligaRepository.save(liga);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@CrossOrigin
	@DeleteMapping ("liga/{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable ("id") Integer id){
		if (ligaRepository.existsById(id)) {
				ligaRepository.deleteById(id);
				return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
}
